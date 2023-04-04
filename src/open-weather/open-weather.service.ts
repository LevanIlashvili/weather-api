import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, catchError, lastValueFrom } from 'rxjs';
import { formatLocation } from '../utils/utils';
import { GeocodeResponse } from './dto/geocode.response';
import {
  OpenWeatherForecast,
  OpenWeatherForecastResponse,
  OpenWeatherGeocodeItem,
} from './dto/open-weather-forecast';

@Injectable()
export class OpenWeatherService {
  private OPEN_WEATHER_API_URL = `https://api.openweathermap.org`;
  private API_KEY;
  constructor(
    private readonly _configService: ConfigService,
    private readonly _httpService: HttpService,
  ) {
    this.API_KEY = _configService.get('OPEN_WEATHER_API_KEY');
  }

  lookup(query: string) {
    // Using OpenWeatherMap's Geocoding API to retrieve list of available locations by query
    const url = `${this.OPEN_WEATHER_API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${this.API_KEY}`;
    return this._httpService
      .get<OpenWeatherGeocodeItem[]>(url)
      .pipe(
        map((res) => res.data),
        map((data) =>
          data.map((location) => {
            return {
              name: location.name,
              fullName: formatLocation(
                location.name,
                location.state,
                location.country,
              ),
              lat: location.lat,
              lon: location.lon,
            };
          }),
        ),
      )
      .pipe(
        catchError(() => {
          throw new NotFoundException('Not found');
        }),
      );
  }

  forecast(lat: number, lon: number) {
    const url = `${this.OPEN_WEATHER_API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`;
    return this._httpService
      .get<OpenWeatherForecastResponse>(url)
      .pipe(
        map((res) => res.data),
        map((data) => data.list),
      )
      .pipe(
        catchError(() => {
          throw new NotFoundException('Not found');
        }),
      );
  }
}
