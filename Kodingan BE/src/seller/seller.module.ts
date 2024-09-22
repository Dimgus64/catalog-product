import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { Seller, SellerSchema } from '../models/seller.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }]),
  ],
  providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}
