import { Module } from '@nestjs/common';
import { CatalogProductService } from './catalog-product.service';
import { CatalogProductController } from './catalog-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCatalog, ProductCatalogSchema } from 'src/models/product-catalog.schema';
import { Product, ProductSchema } from 'src/models/product.schema';
import { Catalog, CatalogSchema } from 'src/models/catalog.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: ProductCatalog.name, schema: ProductCatalogSchema },
    { name: Product.name, schema: ProductSchema },
    { name: Catalog.name, schema: CatalogSchema}
  ])],
  providers: [CatalogProductService],
  controllers: [CatalogProductController],
})
export class CatalogProductModule {}
