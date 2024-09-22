import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { Seller } from 'src/models/seller.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Seller.name) private sellerModel: Model<Seller>,
  ) {}

  async login(seller: any) {
    const payload = { username: seller.username, sub: seller.id };
    return {
      access_token: this.jwtService.sign(payload), // Hasilkan token JWT
    };
  }

  // Registrasi seller
  async registerSeller(sellerData: any) {
    const hashedPassword = await bcrypt.hash(sellerData.password, 10);
    console.log('Seller data:', sellerData);
    // Simpan seller ke database (kamu perlu menggunakan repository untuk ini)
    const newSeller = {
      ...sellerData,
      password: hashedPassword, // Simpan password yang sudah di-hash
    };

    const createdSeller = new this.sellerModel(newSeller);
    createdSeller.save();
    
    // Return seller baru (tanpa password) atau token
    return newSeller;
  }

  
  // Login seller
  async loginSeller(email: string, password: string) {
    // Cari seller berdasarkan email
    const seller = await this.findSellerByEmail(email); 
    
    console.log("seller", seller);
    console.log("password", password);

    const isMatched = await bcrypt.compare(password, seller?.password);
    
    
    if (!seller || !isMatched) {
      throw new HttpException("Invalid Email", HttpStatus.BAD_REQUEST);
    }

    // Jika valid, generate JWT token
    const payload = {
      id: seller._id,
      email: seller.email,
      name: seller.name
    }

    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '24h' }),
    };
  }

  // Cari seller dari database (mock untuk sementara)
  async findSellerByEmail(email: string): Promise<any> {
    // Logika untuk cari di database
    const seller = await this.sellerModel.findOne({ email });
    
    return seller;
  }
}