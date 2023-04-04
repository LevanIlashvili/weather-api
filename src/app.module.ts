import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenWeatherModule } from './open-weather/open-weather.module';
import { SearchHistoryModule } from './search-history/search-history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    OpenWeatherModule,
    SearchHistoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      ssl: true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
