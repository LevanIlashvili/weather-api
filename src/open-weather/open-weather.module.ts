import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenWeatherService } from './open-weather.service';
import { OpenWeatherController } from './open-weather.controller';
import { SearchHistoryModule } from 'src/search-history/search-history.module';

@Module({
  imports: [HttpModule, SearchHistoryModule],
  providers: [OpenWeatherService],
  exports: [OpenWeatherService],
  controllers: [OpenWeatherController],
})
export class OpenWeatherModule {}
