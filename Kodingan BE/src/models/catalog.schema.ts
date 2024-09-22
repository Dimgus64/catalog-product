import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

export type CatalogDocument = HydratedDocument<Catalog>;

@Schema()
export class Catalog {
  @Prop({ type: String, required: true })
  catalog_name: string;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;

  @Prop({ type: String, required: true })
  url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Catalog' })
  Catalog: string;
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog);
