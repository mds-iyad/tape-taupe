// export type Message = {
//     id: number;
//     date: Date;
//     content: string;
//     name: string;
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  
  @Prop({default: () => new Date() })
  date: Date;

  @Prop()
  content: string;

  @Prop()
  name: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);