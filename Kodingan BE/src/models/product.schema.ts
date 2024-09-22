import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  quantity_available: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  Product: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
