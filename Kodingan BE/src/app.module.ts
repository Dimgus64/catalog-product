import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogController } from './catalog.controller';
import { SellerModule } from './seller/seller.module';
import { ProductModule } from './product/product.module';
import { CatalogProductModule } from './catalog-product/catalog-product.module';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OnModuleInit } from '@nestjs/common';
import { DatabaseModule } from './models/database.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dimasagus64:vnm774js41@cluster0.bd8ci.mongodb.net/'),
    DatabaseModule,
    SellerModule,
    ProductModule,
    CatalogProductModule,
    CatalogModule,
    AuthModule
  ],
  controllers: [AppController, CatalogController],
  providers: [AppService],
  exports: [MongooseModule],
})

export class AppModule{}
