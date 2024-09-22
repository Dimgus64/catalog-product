import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("catalogs")
export class CatalogController{
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    const numbers = [2,4,6,8];
    const object = {
      name: 'gilang',
      kelas: 1
    }

    let result = 0;
    for (const x of numbers) {
      console.log(x);
      result += x;
    }

    return object.kelas;
  }
}
