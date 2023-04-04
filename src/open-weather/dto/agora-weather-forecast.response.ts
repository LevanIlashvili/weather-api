export class AgoraWeatherForecast {
  date: string;
  temperature: {
    max: {
      celsius: number;
      timestamp: number;
    };
    min: {
      celsius: number;
      timestamp: number;
    };
  };
}
