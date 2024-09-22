import { Controller, Post, Delete, Param, Body, Get, Patch } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  // Endpoint untuk membuat catalog baru
  @Post()
  createCatalog(@Body() catalogData: any) {
    return this.catalogService.createCatalog(catalogData);
  }

  // Endpoint untuk menghapus catalog berdasarkan ID
  @Delete(':id')
  deleteCatalog(@Param('id') catalogId: number) {
    return this.catalogService.deleteCatalog(catalogId);
  }

  // Endpoint untuk mendapatkan semua catalog
  @Get()
  getAllCatalogs() {
    return this.catalogService.getAllCatalogs();
  }

  // Endpoint untuk mengubah apakah catalog ditampilkan di beranda atau tidak
  @Patch(':id/homepage')
  toggleShowOnHomepage(@Param('id') catalogId: number) {
    return this.catalogService.toggleShowOnHomepage(catalogId);
  }

  // Endpoint untuk mendapatkan catalog berdasarkan ID
  @Get(':id')
  getCatalogById(@Param('id') catalogId: number) {
    return this.catalogService.getCatalogById(catalogId);
  }
}
