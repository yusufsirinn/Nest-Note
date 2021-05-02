
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema({collection: "notedb", versionKey: false})
export class Note {
  @Prop()
  name: string;

  @Prop()
  note: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
