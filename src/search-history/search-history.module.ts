import { Module } from '@nestjs/common';
import { SearchHistoryService } from './search-history.service';
import { SearchHistoryController } from './search-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchHistory } from './entities/search-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SearchHistory])],
  providers: [SearchHistoryService],
  controllers: [SearchHistoryController],
  exports: [SearchHistoryService],
})
export class SearchHistoryModule {}
