import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { NoteModule } from './note/note.module';

@Module({
  imports: [MongooseModule.forRoot(config.databaseurl), NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
