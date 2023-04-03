import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { OpenWeatherController } from './open-weather.controller';
import { OpenWeatherService } from './open-weather.service';

describe('OpenWeatherController', () => {
  let controller: OpenWeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
      controllers: [OpenWeatherController],
      providers: [OpenWeatherService],
    }).compile();

    controller = module.get<OpenWeatherController>(OpenWeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
