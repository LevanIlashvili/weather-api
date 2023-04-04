export class OpenWeatherForecast {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
}

export class OpenWeatherForecastResponse {
  list: OpenWeatherForecast[];
  city: {
    timezone: number;
    sunrise: number;
    sunset: number;
    name: string;
  };
}

export class OpenWeatherGeocodeItem {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
