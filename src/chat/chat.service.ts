import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatModel, ChatModelDocument } from './model/chat.model';

@Injectable()
export class ChatService {
    constructor(@InjectModel(ChatModel.name) private chatModel: Model<ChatModelDocument>){}
    
    async save(chat: ChatModel): Promise<boolean> {
        const saveReply = await new this.chatModel(chat).save();
        return saveReply ? true : false;
    }

    async fetchAll(): Promise<ChatModel[]>{
        return await this.chatModel.find();
    }
}
