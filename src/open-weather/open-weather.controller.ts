import { Controller, Get } from '@nestjs/common';
import { OpenWeatherService } from './open-weather.service';

@Controller('open-weather')
export class OpenWeatherController {
  constructor(private readonly _openWeatherService: OpenWeatherService) {}

  @Get('lookup')
  lookup() {
    return this._openWeatherService.lookup('London');
  }
}
