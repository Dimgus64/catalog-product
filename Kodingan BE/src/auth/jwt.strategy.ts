import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Ambil token dari header
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey', // Sama dengan secret yang kamu set di auth.module.ts
    });
  }

  async validate(payload: any) {
    // Payload adalah data yang ada di dalam token
    return { id: payload.sub, username: payload.username }; // Atur data yang ingin ditambahkan ke request
  }
}
