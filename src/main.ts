import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "dotenv/config";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ dismissDefaultMessages: true }));
  app.setGlobalPrefix("api");
  await app.listen(3000);
}
bootstrap();
