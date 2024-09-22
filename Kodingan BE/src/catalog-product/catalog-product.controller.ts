import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { CatalogProductService } from './catalog-product.service';

@Controller('catalog-product')
export class CatalogProductController {
  constructor(private catalogProductService: CatalogProductService) {}

  // Endpoint untuk menambahkan product ke catalog
  @Post(':catalogId/product')
  addProductToCatalog(
    @Param('catalogId') catalogId: number,
    @Body() productData: any,
  ) {
    return this.catalogProductService.addProductToCatalog(catalogId, productData,);
  }

  // Endpoint untuk menghapus product dari catalog
  @Delete(':catalogId/product/:productId')
  removeProductFromCatalog(
    @Param('catalogId') catalogId: number,
    @Param('productId') productId: number,
  ) {
    return this.catalogProductService.removeProductFromCatalog(catalogId, productId);
  }
}
