import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type SellerDocument = HydratedDocument<Seller>;

@Schema()
export class Seller {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  email: string;

  @Prop()
  createdAt: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
