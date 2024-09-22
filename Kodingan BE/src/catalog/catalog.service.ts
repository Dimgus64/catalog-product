import { HttpException, HttpStatus,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Catalog } from 'src/models/catalog.schema';

@Injectable()
export class CatalogService {
  constructor(
    @InjectModel(Catalog.name) private catalogModel: Model<Catalog>,
  ) {}
 
  private catalogs = []; // Sementara simpan catalog di array, nanti bisa sambungkan ke database

  // Membuat catalog baru
  createCatalog(catalogData: any) {
    const id = new mongoose.Types.ObjectId();
    const newCatalog = {
      id,
      catalog_name: catalogData.catalog_name,
      is_active: catalogData.is_active || false,
      url: `www.linkcatalog.com/${id}`, // URL unik untuk catalog
    };
    const createCatalog = new this.catalogModel(newCatalog);
    createCatalog.save();

    return newCatalog;
  }

  // Hapus catalog berdasarkan ID
  async deleteCatalog(catalogId: number) {
    const catalog = await this.catalogModel.findById(catalogId);

    if (!catalog) {
      throw new HttpException("Invalid Product ID", HttpStatus.BAD_REQUEST);
    }

    await this.catalogModel.deleteOne({ _id: catalogId });

    return {
      status: true,
      message: "Catalog Deleted Successfully"
    };
  }

  // Mengambil semua catalog
  async getAllCatalogs() {
    const catalogs = await this.catalogModel.find()
    return catalogs;
  }

  // Dapatkan catalog berdasarkan ID
  getCatalogById(catalogId: number) {
    return this.catalogs.find(catalog => catalog.id === catalogId);
  }

  // Toggle showOnHomepage
  toggleShowOnHomepage(catalogId: number) {
    const catalog = this.getCatalogById(catalogId);
    if (!catalog) {
      throw new Error('Catalog not found');
    }
    catalog.showOnHomepage = !catalog.showOnHomepage;
    return catalog;
  }
}
