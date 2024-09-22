import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

export type ProductCatalogDocument = HydratedDocument<ProductCatalog>;

@Schema()
export class ProductCatalog {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true })
  product: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Catalog', required: true })
  catalog: string;
}

export const ProductCatalogSchema = SchemaFactory.createForClass(ProductCatalog);
