import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatService } from './chat.service';
import { ChatModel, ChatModelSchema } from './model/chat.model';

@Module({
  providers: [ChatService],
  exports: [ChatService],
  imports: [
    MongooseModule.forFeature([{ name: ChatModel.name, schema: ChatModelSchema }])]
})
export class ChatModule {}
