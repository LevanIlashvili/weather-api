import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ForecastRequestDto } from './dto/forecast.request';
import { OpenWeatherService } from './open-weather.service';

@Controller('open-weather')
export class OpenWeatherController {
  constructor(private readonly _openWeatherService: OpenWeatherService) {}

  @Get('lookup')
  lookup(@Query('query') query: string) {
    return this._openWeatherService.lookup(query);
  }

  @Post('forecast')
  forecast(@Body() req: ForecastRequestDto) {
    //TODO actual code.
    return req;
  }
}
