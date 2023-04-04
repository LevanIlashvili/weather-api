import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { AgoraWeatherForecastResponse } from './dto/agora-weather-forecast.response';
import { ForecastRequestDto } from './dto/forecast.request';
import { GeocodeResponse } from './dto/geocode.response';
import { OpenWeatherService } from './open-weather.service';

@Controller('open-weather')
export class OpenWeatherController {
  constructor(private readonly _openWeatherService: OpenWeatherService) {}

  @Get('lookup')
  lookup(@Query('query') query: string): Observable<GeocodeResponse[]> {
    return this._openWeatherService.lookup(query);
  }

  @Post('forecast')
  async calculateForecast(
    @Body() req: ForecastRequestDto,
  ): Promise<AgoraWeatherForecastResponse> {
    const forecast = await lastValueFrom(
      this._openWeatherService.forecast(req.lat, req.lon),
    );
    const calculationResult = this._openWeatherService.calculate(forecast.list);
    const result = {
      settings: {
        timezoneDiff: forecast.city.timezone,
        city: req.city,
      },
      forecasts: calculationResult,
    };
    return result;
  }
}
