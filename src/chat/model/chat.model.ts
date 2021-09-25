import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection: "chat", versionKey: false})
export class ChatModel {

    @Prop()
    userName: string;

    @Prop()
    message: string;

    @Prop()
    date: Date;

    constructor(
        userName: string,
        message: string) {
        this.userName = userName;
        this.message = message;
        this.date = new Date;
    }
}

export type ChatModelDocument = ChatModel & Document;
export const ChatModelSchema = SchemaFactory.createForClass(ChatModel);