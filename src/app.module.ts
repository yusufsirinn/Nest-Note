import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AllExceptionFilter } from './base-exception-filter/all-exception.filter';
import { ChatGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';
import config from './config';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { NoteModule } from './note/note.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.databaseurl),
    NoteModule,
    AuthModule,
    ScheduleModule.forRoot(),
    TasksModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter
    },
    ChatGateway
  ],
})
export class AppModule { }
