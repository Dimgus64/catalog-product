import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { SellerService } from './seller.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Pastikan guard ini sudah dibuat

@Controller('seller')
export class SellerController {
  constructor(private sellerService: SellerService) {}

  // Endpoint untuk mendapatkan profil seller yang sedang login
  @UseGuards(JwtAuthGuard) // Menggunakan guard untuk memastikan seller sudah login
  @Get('profile')
  getSellerProfile(@Req() req) {
    const sellerId = req.user.id; // ID seller diambil dari token JWT
    return this.sellerService.getSellerProfile(sellerId);
  }
}
