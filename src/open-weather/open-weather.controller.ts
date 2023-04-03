import { Controller, Get, Query } from '@nestjs/common';
import { OpenWeatherService } from './open-weather.service';

@Controller('open-weather')
export class OpenWeatherController {
  constructor(private readonly _openWeatherService: OpenWeatherService) {}

  @Get('lookup')
  lookup(@Query('query') query: string) {
    return this._openWeatherService.lookup(query);
  }
}
