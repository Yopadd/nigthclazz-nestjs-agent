import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';

@Controller('radar')
export class RadarController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  radar() {
    return this.httpService
      .get('http://localhost:3000/signal')
      .pipe(map((response) => response.data));
  }
}
