import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './model/note.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
AuthModule,
],
  providers: [NoteService],
  controllers: [NoteController]
})
export class NoteModule {}
