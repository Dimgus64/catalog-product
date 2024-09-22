import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { ProductCatalog, ProductCatalogSchema } from './product-catalog.schema';
import { Seller, SellerSchema } from './seller.schema';
import { Catalog, CatalogSchema } from './catalog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema 
      },
      {
        name: ProductCatalog.name,
        schema: ProductCatalogSchema 
      },
      {
        name: Seller.name,
        schema: SellerSchema 
      },
      {
        name: Catalog.name,
        schema: CatalogSchema 
      },
    ])
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule{}
