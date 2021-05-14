
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: "userdb", versionKey: false })
export class User {
  @Prop()
  mail: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);