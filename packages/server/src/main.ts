import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { graphqlUploadExpress } from 'graphql-upload';
import { json } from 'body-parser';

import { AppModule } from './app.module';
import type {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './common/configs/config.interface';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  app.enableShutdownHooks();

  // GraphQL Upload
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));

  // Prisma Client Exception Filter for unhandled exceptions
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  app.use(json({ limit: '50mb' }));

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Swagger Api
  // if (swaggerConfig.enabled) {
  //   const options = new DocumentBuilder()
  //     .setTitle(swaggerConfig.title || 'Nestjs')
  //     .setDescription(swaggerConfig.description || 'The nestjs API description')
  //     .setVersion(swaggerConfig.version || '1.0')
  //     .build();
  //   const document = SwaggerModule.createDocument(app, options);

  //   SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  // }

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(process.env.PORT || nestConfig.port || 3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
