import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenWeatherModule } from './open-weather/open-weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    OpenWeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
