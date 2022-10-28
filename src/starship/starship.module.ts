import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StarshipController } from './starship.controller';
import { StarshipService } from './starship.service';

@Module({
  imports: [HttpModule],
  providers: [StarshipService],
  controllers: [StarshipController],
})
export class StarshipModule {}
