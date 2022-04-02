// export type Message = {
//     id: number;
//     date: Date;
//     content: string;
//     name: string;
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/Schemas/users.schema'

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  
  @Prop({default: () => new Date() })
  date: Date;

  @Prop()
  content: string;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const MessageSchema = SchemaFactory.createForClass(Message);