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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),

    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
      }),
    }),

    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
