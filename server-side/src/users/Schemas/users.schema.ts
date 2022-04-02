import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/enums/role.enum';

export type UsersDocument = User & Document;

@Schema()
export class User {
  
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({default: () => new Date() })
  date: Date;

  @Prop({default:[Role.User]})
  roles: Role[];

}

export const UsersSchema = SchemaFactory.createForClass(User);