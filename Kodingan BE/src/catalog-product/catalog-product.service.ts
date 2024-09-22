import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catalog } from 'src/models/catalog.schema';
import { ProductCatalog } from 'src/models/product-catalog.schema';
import { Product } from 'src/models/product.schema';

@Injectable()
export class CatalogProductService {
  constructor(
    @InjectModel(ProductCatalog.name) private productCatalogModel: Model<ProductCatalog>,
    @InjectModel(Catalog.name) private catalogModel: Model<Catalog>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}


  // Tambahkan product ke dalam catalog
  async addProductToCatalog(catalogId: number, productData: any) {
    // Temukan catalog berdasarkan ID
    const catalog = await this.catalogModel.findById(catalogId);

    if (!catalog) {
      throw new HttpException("Invalid Catalog ID", HttpStatus.BAD_REQUEST);
    }

    // Temukan product berdasarkan ID
    const product = await this.productModel.findById(productData.product);

    if (!product) {
      throw new HttpException("Invalid Product ID", HttpStatus.BAD_REQUEST);
    }

    // Buat entri baru untuk relasi product dan catalog
    const catalogproduct = new this.productCatalogModel({
      product: productData.product,
      catalog: catalogId,
    });
    await catalogproduct.save();

    // Kembalikan respons dengan id catalog, id product, dan nama product
    return {
      product: product._id,
      catalog: catalog._id,
      productName: product.name,  // Tambahkan nama produk di sini
    };
  }

  // Hapus product dari catalog
  async removeProductFromCatalog(catalogId: number, productId: number) {
    const catalog = await this.catalogModel.findById(catalogId);

    if (!catalog) {
      throw new HttpException("Invalid Catalog ID", HttpStatus.BAD_REQUEST);
    }

    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new HttpException("Invalid Product ID", HttpStatus.BAD_REQUEST);
    }

    await this.productCatalogModel.deleteOne(
      { product: productId, catalog: catalogId }
    )
    return {
      status: true,
      message: "Product deleted from catalog Successfully"
    };
  }

}
