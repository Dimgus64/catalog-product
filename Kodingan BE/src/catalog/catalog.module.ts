import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { Catalog, CatalogSchema } from 'src/models/catalog.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogSchema }])],
  providers: [CatalogService],
  controllers: [CatalogController],
})
export class CatalogModule {}
