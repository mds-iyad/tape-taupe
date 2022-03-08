import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Product & Document;

@Schema()
export class Product {
  
  @Prop()
  content: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;

  @Prop()
  description: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Product);