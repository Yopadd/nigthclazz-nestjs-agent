import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RadarController } from './radar.controller';

@Module({
  imports: [HttpModule],
  controllers: [RadarController],
})
export class RadarModule {}
