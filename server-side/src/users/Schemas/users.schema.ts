import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = User & Document;

@Schema()
export class User {
  
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({default: () => new Date() })
  date: Date;

}

export const UsersSchema = SchemaFactory.createForClass(User);