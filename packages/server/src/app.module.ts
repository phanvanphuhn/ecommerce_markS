import { readFileSync } from 'fs';

import 'isomorphic-fetch';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule, QueryInfo, loggingMiddleware } from 'nestjs-prisma';

import config from './common/configs/config';
import { DatabaseModule } from './modules/_database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { GraphqlConfig } from './common/configs/config.interface';
import { ContactSearchModule } from './modules/contact-search/contact-search.module';
import { UserProfilesModule } from './modules/user-profiles/user-profiles.module';
import { ComplaintsModule } from './modules/complaints/complaints.module';
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';
import { SalesModule } from './modules/sales/sales.module';
import { EventsModule } from './modules/events/events.module';
import { SearchHistoryModule } from './modules/search-history/search-history.module';
import { S3Module } from './modules/_aws/s3.module';
import { CaseLogModule } from './modules/case-log/case-log.module';
import { ProductsModule } from './modules/products/products.module';

interface DatabaseCreds {
  host: string;
  username: string;
  password: string;
  port: number;
}

function readDatabaseSecrets(secretsFilePath: string): DatabaseCreds {
  try {
    const secretData = readFileSync(secretsFilePath, 'utf8');
    return JSON.parse(secretData);
  } catch (error) {
    console.error('Error reading database secrets:', error);
    return null;
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),

    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        // read DatabaseCreds from mounted secret file
        const databaseCreds = readDatabaseSecrets(
          configService.get('secretsFilePath'),
        );

        if (databaseCreds) {
          return {
            host: databaseCreds.host,
            port: databaseCreds.port,
            user: databaseCreds.username,
            password: databaseCreds.password,
            database: configService.get('POSTGRES_DB'),
          };
        }

        return {
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT')),
          user: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DB'),
        };
      },
    }),

    PrismaModule.forRootAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseCreds = readDatabaseSecrets(
          configService.get('secretsFilePath'),
        );
        // if there's databaseCreds, use them to connect to the database
        // else use env

        const user =
          databaseCreds?.username || configService.get('POSTGRES_USER');
        const password =
          databaseCreds?.password || configService.get('POSTGRES_PASSWORD');
        const host = databaseCreds?.host || configService.get('DB_HOST');
        const port =
          databaseCreds?.port || configService.get('DB_PORT') || 5432;
        const database = configService.get('POSTGRES_DB');
        const schema = configService.get('DB_SCHEMA');

        return {
          prismaOptions: {
            datasourceUrl: `postgresql://${user}:${password}@${host}:${port}/${database}?schema=${schema}&sslmode=prefer`,
            log: ['query'],
          },
          middlewares: [
            // configure your prisma middleware
            loggingMiddleware({
              logger: new Logger('PrismaMiddleware'),
              logLevel: 'debug',
              logMessage: (query: QueryInfo) =>
                `[Prisma Query] ${query.model}.${query.action} - ${query.executionTime}ms`,
            }),
          ],
        };
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          // schema options
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          sortSchema: graphqlConfig.sortSchema,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          // subscription
          installSubscriptionHandlers: true,
          includeStacktraceInErrorResponses: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
    }),
    AuthModule,
    ContactSearchModule,
    UserProfilesModule,
    ComplaintsModule,
    LeaderboardModule,
    SalesModule,
    EventsModule,
    SearchHistoryModule,
    S3Module,
    CaseLogModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
