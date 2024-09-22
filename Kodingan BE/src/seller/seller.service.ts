import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerService {
  private sellers = []; // Sementara simpan data seller di array (nanti bisa sambungkan ke database)

  // Method untuk mendapatkan data profil seller berdasarkan ID
  getSellerProfile(sellerId: number) {
    const seller = this.sellers.find(seller => seller.id === sellerId);
    if (!seller) {
      throw new Error('Seller not found');
    }
    return seller;
  }

  // (Tambahkan seller baru saat registrasi)
  addSeller(sellerData: any) {
    const newSeller = {
      id: this.sellers.length + 1, // ID sementara (bisa diganti dengan UUID)
      ...sellerData,
    };
    this.sellers.push(newSeller);
    return newSeller;
  }
}
