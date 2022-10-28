import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadarModule } from './radar/radar.module';
import { StarshipModule } from './starship/starship.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    RadarModule,
    StoreModule,
    MongooseModule.forRoot(
      'mongodb://lifeguard:zenika@localhost:27017/store?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4',
    ),
    StarshipModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lifeguard',
      password: 'nestjsNigthClazz',
      database: 'enlistment',
      entities: [],
      synchronize: true,
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
