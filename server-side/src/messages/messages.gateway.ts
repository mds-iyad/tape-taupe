import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Message } from './Schema/messages.schema';

@WebSocketGateway({
    cors: { origin: '*' },
    namespace: '/messages',
  })
  export class MessagesGateway {
    @WebSocketServer() wss: Server;
    sendNewMessage(message: any): void {
      this.wss.emit('addMessage', message);
    }
  }