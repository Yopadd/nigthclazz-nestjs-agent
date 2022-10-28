import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RadarModule } from './radar/radar.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    RadarModule,
    StoreModule,
    MongooseModule.forRoot(
      'mongodb://lifeguard:zenika@localhost:27017/store?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4',
    ),
  ],
})
export class AppModule {}
