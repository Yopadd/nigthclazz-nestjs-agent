import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cockpit, CockpitSchema } from './schemas/cockpit.schema';
import { Hold, HoldSchema } from './schemas/hold.schema';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
  controllers: [StoreController],
  imports: [
    MongooseModule.forFeature([
      { name: Hold.name, schema: HoldSchema },
      { name: Cockpit.name, schema: CockpitSchema },
    ]),
  ],
  providers: [StoreService],
})
export class StoreModule {}
