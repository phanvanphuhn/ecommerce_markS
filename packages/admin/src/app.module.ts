import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { ConfigModule } from '@nestjs/config';
import { Database, Resource, getModelByName } from '@adminjs/prisma'
import AdminJS from 'adminjs';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma.service.js'

AdminJS.registerAdapter({ Database, Resource })

const DEFAULT_ADMIN = {
  email: 'admin@marks',
  password: 'marks',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AdminModule.createAdminAsync({
      useFactory: async () => {
        const prisma = new PrismaService();

        return {
          adminJsOptions: {
            rootPath: '/',
            resources: [{
              resource: {
                model: getModelByName('UserProfile'),
                client: prisma,
              },
              options: {},
            },
            {
              resource: {
                model: getModelByName('ContactSearch'),
                client: prisma,
              },
              options: {}
            }
          ],
          },
          auth: {
            authenticate,
            cookiePassword: 'secret',
            cookieName: 'adminjs',
          },
        }
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
