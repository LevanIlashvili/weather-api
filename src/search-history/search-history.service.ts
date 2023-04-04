import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { SearchHistory } from './entities/search-history.entity';

@Injectable()
export class SearchHistoryService {
  constructor(
    @InjectRepository(SearchHistory)
    private readonly _searchHistoryRepository: Repository<SearchHistory>,
  ) {}

  async insert(sessionId: string, response: any) {
    await this._searchHistoryRepository.save({
      sessionId,
      response,
    });
  }

  async find(sessionId?: string, page = 0, limit = 50) {
    let filter: FindManyOptions<SearchHistory> = {
      select: ['response'],
      order: {
        createdAt: 'DESC',
      },
      skip: page * limit,
      take: limit,
    };
    if (sessionId) {
      filter = {
        where: {
          sessionId,
        },
        ...filter,
      };
    }
    return this._searchHistoryRepository.find(filter);
  }
}
