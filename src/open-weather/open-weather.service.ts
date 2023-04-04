import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, catchError } from 'rxjs';
import { SearchHistoryService } from 'src/search-history/search-history.service';
import { formatLocation } from '../utils/utils';
import { AgoraWeatherForecast } from './dto/agora-weather-forecast.response';
import { OpenWeatherForecast } from './dto/open-weather-forecast.types';
import {
  OpenWeatherForecastResponse,
  OpenWeatherGeocodeItem,
} from './dto/open-weather-forecast.types';

@Injectable()
export class OpenWeatherService {
  private OPEN_WEATHER_API_URL = `https://api.openweathermap.org`;
  private API_KEY;
  constructor(
    private readonly _configService: ConfigService,
    private readonly _httpService: HttpService,
    private readonly _searchHistoryService: SearchHistoryService,
  ) {
    this.API_KEY = _configService.get('OPEN_WEATHER_API_KEY');
  }

  lookup(query: string) {
    // Using OpenWeatherMap's Geocoding API to retrieve list of available locations by query
    const url = `${this.OPEN_WEATHER_API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${this.API_KEY}`;
    return this._httpService
      .get<OpenWeatherGeocodeItem[]>(url)
      .pipe(
        map(({ data }) =>
          data.map(({ name, state, country, lat, lon }) => ({
            name,
            fullName: formatLocation(name, state, country),
            lat,
            lon,
          })),
        ),
      )
      .pipe(
        catchError(() => {
          throw new NotFoundException('Not found');
        }),
      );
  }

  forecast(lat: number, lon: number) {
    const url = `${this.OPEN_WEATHER_API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`;
    return this._httpService
      .get<OpenWeatherForecastResponse>(url)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new NotFoundException('Not found');
        }),
      );
  }

  calculate(items: OpenWeatherForecast[]): AgoraWeatherForecast[] {
    const response: AgoraWeatherForecast[] = [];
    // Pick up unique dates from forecast items
    const uniqueDates = [
      ...new Set(items.map((item) => item.dt_txt.substring(0, 10))),
    ]
      .sort()
      .slice(0, 5);

    // iterate through dates and find min, max temp with hours
    for (const date of uniqueDates) {
      const stats: AgoraWeatherForecast = {
        date,
        temperature: {
          min: {
            celsius: Number.MAX_SAFE_INTEGER,
            timestamp: null,
          },
          max: {
            celsius: Number.MIN_SAFE_INTEGER,
            timestamp: null,
          },
        },
      };
      // pick date's forecasts
      const dailyForecasts = items.filter((item) =>
        item.dt_txt.startsWith(date),
      );
      for (const forecast of dailyForecasts) {
        if (stats.temperature.max.celsius < forecast.main.temp_max) {
          stats.temperature.max.celsius = forecast.main.temp_max;
          stats.temperature.max.timestamp = forecast.dt;
        }
        if (stats.temperature.min.celsius > forecast.main.temp_min) {
          stats.temperature.min.celsius = forecast.main.temp_min;
          stats.temperature.min.timestamp = forecast.dt;
        }
      }
      response.push(stats);
    }
    return response;
  }

  logSearchRequest(sessionId: string, response: any) {
    this._searchHistoryService.insert(sessionId, response);
  }
}
