import { Controller, Get, Query } from '@nestjs/common';
import { SearchHistoryService } from './search-history.service';

@Controller('search-history')
export class SearchHistoryController {
  constructor(private readonly _searchHistoryService: SearchHistoryService) {}

  @Get()
  find(
    @Query('sessionId') sessionId?: string,
    @Query('page') page = 0,
    @Query('limit') limit = 50,
  ) {
    return this._searchHistoryService.find(sessionId, page, limit);
  }
}
