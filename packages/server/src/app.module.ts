import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Logger, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaModule, QueryInfo, loggingMiddleware } from "nestjs-prisma";

import config from "./common/configs/config";
import { GqlConfigService } from "./gql-config.service";
import { DatabaseModule } from "./modules/_database/database.module";
import { AuthModule } from "./modules/auth/auth.module";
import { GraphqlConfig } from "./common/configs/config.interface";

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
        host: configService.get("POSTGRES_HOST"),
        port: configService.get("POSTGRES_PORT"),
        user: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DB"),
      }),
    }),

    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
          log: ["query"],
        },
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger("PrismaMiddleware"),
            logLevel: "debug",
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
        const graphqlConfig = configService.get<GraphqlConfig>("graphql");
        return {
          // schema options
          autoSchemaFile:
            graphqlConfig.schemaDestination || "./src/schema.graphql",
          sortSchema: graphqlConfig.sortSchema,
          buildSchemaOptions: {
            numberScalarMode: "integer",
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
