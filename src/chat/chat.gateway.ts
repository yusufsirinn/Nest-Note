import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { ChatModel } from './model/chat.model';

@WebSocketGateway(80)
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(private chatService: ChatService){}

  private logger: Logger = new Logger('ChatGateway');

  chatList: ChatModel[] = [];

  handleDisconnect(client: any) {
    this.logger.log("disconnect");
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log("connect");
  }

  afterInit(server: any) {
    this.logger.log("Initialized");
    this.getChatList();
  }

  async getChatList(){
    this.chatList = await this.chatService.fetchAll();
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, chat: ChatModel) {
    this.chatList.push(chat);
    console.log(this.chatList);
    this.chatService.save(chat);
    client.emit('message', this.chatList);
  }
}
