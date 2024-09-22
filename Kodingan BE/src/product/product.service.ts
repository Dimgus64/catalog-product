import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/models/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  private products = []; // Simpan daftar produk (sementara)

  // Membuat produk baru
  createProduct(productData: any) {
    const createProduct = new this.productModel(productData);
    createProduct.save();

    return productData;
  }

  // Menghapus produk berdasarkan ID
  async deleteProduct(productId: number) {
    const product = await this.productModel.findById(productId);

    if (!product) {
      throw new HttpException("Invalid Product ID", HttpStatus.BAD_REQUEST);
    }

    await this.productModel.deleteOne({ _id: productId });

    return {
      status: true,
      message: "Product Deleted Successfully"
    };
  }

  // Mendapatkan daftar produk (opsional)
  async getAllProducts() {
    const products = await this.productModel.find();

    return products;
  }
}
