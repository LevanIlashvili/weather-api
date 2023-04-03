import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { OpenWeatherService } from './open-weather.service';

describe('OpenWeatherService', () => {
  let service: OpenWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
      providers: [OpenWeatherService],
    }).compile();

    service = module.get<OpenWeatherService>(OpenWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
