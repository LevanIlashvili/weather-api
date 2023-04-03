import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenWeatherService } from './open-weather.service';
import { OpenWeatherController } from './open-weather.controller';

@Module({
  imports: [HttpModule],
  providers: [OpenWeatherService],
  exports: [OpenWeatherService],
  controllers: [OpenWeatherController],
})
export class OpenWeatherModule {}
