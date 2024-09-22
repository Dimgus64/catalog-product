import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { SellerSchema } from '../models/seller.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Seller', schema: SellerSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'password123', // Ubah dengan key rahasia
      signOptions: { expiresIn: '24h' }, // Token berlaku selama 1 hari
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
