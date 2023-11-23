import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';
import { OrderDirection } from '../../common/pagination/order-direction';

import {
  MobileSearchHistoryFilterArgs,
  MobileSearchHistoryInput,
  MobileSearchHistoryOutput,
} from './dto/mobile-search-history.dto';

@Injectable()
export class SearchHistoryService {
  constructor(private readonly database: Database) {}

  async getSearchHistory(
    salesRepEmail: string,
    filter: MobileSearchHistoryFilterArgs,
  ) {
    let query = this.database
      .selectFrom('marks.SearchHistory')
      .where('salesRepEmail', '=', salesRepEmail)
      .selectAll();

    if (filter.searchType) {
      query = query.where('searchType', '=', filter.searchType);
    }

    if (filter.sort) {
      switch (filter.sort) {
        case OrderDirection.asc:
          query = query.orderBy('createdAt', 'asc');
          break;
        case OrderDirection.desc:
          query = query.orderBy('createdAt', 'desc');
          break;
      }

      if (filter.take) {
        query = query.limit(filter.take);
      }

      if (filter.skip) {
        query = query.offset(filter.skip);
      }
    }

    const result = await query.execute();

    return result.map((item) => new MobileSearchHistoryOutput(item));
  }

  async upsertSearchHistory(
    salesRepEmail: string,
    data: MobileSearchHistoryInput,
  ) {
    const result = await this.database
      .insertInto('marks.SearchHistory')
      .values({
        ...data,
        searchResults: data.searchResults as unknown[],
        salesRepEmail,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          ...data,
          searchResults: data.searchResults as unknown[],
          updatedAt: new Date(),
        }),
      )
      .returningAll()
      .executeTakeFirst();

    return result;
  }
}
