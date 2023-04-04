import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsString, IsUUID } from 'class-validator';

export class ForecastRequestDto {
  @ApiProperty()
  @IsLatitude()
  lat: number;

  @ApiProperty()
  @IsLongitude()
  lon: number;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsUUID()
  sessionId: string;
}
