import { Controller, Post, Delete, Param, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // Endpoint untuk membuat produk baru
  @Post()
  createProduct(@Body() productData: any) {
    return this.productService.createProduct(productData);
  }

  // Endpoint untuk menghapus produk
  @Delete(':productId')
  deleteProduct(@Param('productId') productId: number) {
    return this.productService.deleteProduct(productId);
  }

  // Endpoint untuk mendapatkan semua produk (opsional)
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
