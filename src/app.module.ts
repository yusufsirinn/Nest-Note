import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AllExceptionFilter } from './base-exception-filter/all-exception.filter';
import config from './config';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { NoteModule } from './note/note.module';

@Module({
  imports: [MongooseModule.forRoot(config.databaseurl), NoteModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter
    }
  ],
})
export class AppModule {}
