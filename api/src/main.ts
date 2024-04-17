import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const HTTP_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableShutdownHooks();
  await app.listen(HTTP_PORT);
  const logger = new Logger('App');
  logger.log(`Listening on port ${HTTP_PORT}`);  
  console.log(process.env);
}
bootstrap();
