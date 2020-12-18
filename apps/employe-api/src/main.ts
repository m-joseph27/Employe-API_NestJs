/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT_1;

  const options = new DocumentBuilder()
    .setTitle('Employe Api Documentation')
    .setDescription('To get all Restfull Api Employe')
    .setVersion('1.0')
    .addTag('Employe')
    .build();

  const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
