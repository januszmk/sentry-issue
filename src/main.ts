import './sentry';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/nestjs';
import { ExternalExceptionFilter } from '@nestjs/core/exceptions/external-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.setupNestErrorHandler(app, new ExternalExceptionFilter());

  await app.listen(3000);
}
bootstrap();
