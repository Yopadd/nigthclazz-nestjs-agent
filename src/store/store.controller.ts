import { Controller, Get } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async getStore() {
    const holds = await this.storeService.findHolds();
    const cockpits = await this.storeService.findCockpits();
    const engines = await this.storeService.findEngine();
    return {
      holds,
      cockpits,
      engines,
    };
  }
}
