import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';

import config from './common/configs/config';
import { GqlConfigService } from './gql-config.service';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),

    AuthModule,
    UsersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
