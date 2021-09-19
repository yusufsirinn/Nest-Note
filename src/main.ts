import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './base-exception-filter/all-exception.filter';
import { LoggingInterceptor } from './logging/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new AllExceptionFilter());
  await app.listen(3000);
}
bootstrap();
