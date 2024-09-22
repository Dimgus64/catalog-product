import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() sellerData: any) {
    return this.authService.registerSeller(sellerData);
  }

  @Post('login')
  async login(@Body() loginData: { email: string; password: string }) {
    console.log("logindata", loginData);
    return this.authService.loginSeller(loginData.email, loginData.password);
  }
}
