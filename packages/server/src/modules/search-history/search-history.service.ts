import { Injectable } from '@nestjs/common';


import {
  formatArrayForPostgres,
  parsePostgresArray,
} from '@/common/utils/kysely-cast';

import { Database } from '../_database/database';
import { OrderDirection } from '../../common/pagination/order-direction';

import {
  MobileSearchHistoryFilterArgs,
  MobileSearchHistoryInput,
  MobileSearchHistoryOutput,
} from './dto/mobile-search-history.dto';

import { SearchType } from '@generated/kysely/types';

@Injectable()
export class SearchHistoryService {
  constructor(private readonly database: Database) {}

  async getSearchHistory(
    salesRepEmail: string,
    filter: MobileSearchHistoryFilterArgs,
  ) {
    let query = this.database
      .selectFrom('marks.SearchHistory')
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .selectAll();

    if (filter.searchType) {
      query = query.where(
        'searchType',
        '=',
        formatArrayForPostgres(filter.searchType) as any,
      );
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

    return result.map(
      (item) =>
        new MobileSearchHistoryOutput({
          ...item,
          searchType: parsePostgresArray(item.searchType),
        }),
    );
  }

  async upsertSearchHistory(
    salesRepEmail: string,
    data: MobileSearchHistoryInput,
  ) {
    const result = await this.database
      .insertInto('marks.SearchHistory')
      .values({
        ...data,
        searchType: formatArrayForPostgres(
          data.searchType,
        ) as unknown as SearchType[],
        searchResults: data.searchResults as unknown[],
        salesRepEmail,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          ...data,
          searchType: formatArrayForPostgres(
            data.searchType,
          ) as unknown as SearchType[],
          searchResults: data.searchResults as unknown[],
          updatedAt: new Date(),
        }),
      )
      .returningAll()
      .executeTakeFirst();

    const parsedResult = {
      ...result,
      searchType: parsePostgresArray(result.searchType),
    };

    return parsedResult;
  }
}
