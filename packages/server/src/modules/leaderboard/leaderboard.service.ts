import { Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';
import { Expression } from 'kysely';
import { ConfigService } from '@nestjs/config';

import { integer } from '@/common/utils/kysely-cast';

import { Database } from '../_database/database';

import {
  LeaderboardFilterArgs,
  LeaderboardOutput,
  LeaderboardPeriod,
  LeaderboardType,
} from './dto/leaderboard.dto';

type SelectRankField = 'rankMtd' | 'rankQtd' | 'rankYtd';

const periodToRank = {
  [LeaderboardPeriod.Month]: 'rankMtd',
  [LeaderboardPeriod.Quarter]: 'rankQtd',
  [LeaderboardPeriod.Year]: 'rankYtd',
};

@Injectable()
export class LeaderboardService {
  constructor(
    private readonly database: Database,
    private readonly configService: ConfigService,
  ) {}

  async getLeaderboardOfSelf(
    salesRepEmail: string,
    filter: LeaderboardFilterArgs = {},
  ) {
    if (this.configService.get('globalConfig.deployEnv') === 'stage-ap') {
      filter.year = filter.year ? '2023' : null;
      filter.month = filter.month ? '2' : null;
    }

    let query = this.database.selectFrom('marks.Leaderboard');
    query = query.where('salesRepEmail', 'ilike', salesRepEmail);

    if (filter.country) {
      query = query.where('country', '=', filter.country);
    }

    if (filter.year) {
      query = query.where('year', '=', filter.year);
    }

    if (filter.month) {
      query = query.where('month', '=', filter.month);
    }

    if (filter.sortBy) {
      const rankToFilter = periodToRank[filter.sortBy] as SelectRankField;
      query = query.orderBy(({ ref }) => {
        return integer(ref(rankToFilter));
      }, 'asc');
    }

    const result = await query.selectAll().execute();
    return result.map((item) => new LeaderboardOutput(item));
  }

  async getLeaderboard(
    salesRepEmail: string,
    filter: LeaderboardFilterArgs = {},
  ) {
    if (this.configService.get('globalConfig.deployEnv') === 'stage-ap') {
      filter.year = filter.year ? '2023' : null;
      filter.month = filter.month ? '2' : null;
    }

    // top three or surrounding
    if (filter.type) {
      const rankToFilter = periodToRank[filter.sortBy] as SelectRankField;

      switch (filter.type) {
        case LeaderboardType.TopThree:
          let query = this.database.selectFrom('marks.Leaderboard');
          query = query.groupBy('id');

          if (filter.country) {
            query = query.where('country', '=', filter.country);
          }

          if (filter.year) {
            query = query.where('year', '=', filter.year);
          }

          if (filter.month) {
            query = query.where('month', '=', filter.month);
          }

          if (filter.quarter) {
            query = query.where('quarter', '=', filter.quarter);
          }

          query = query.orderBy(({ ref }) => {
            return integer(ref(rankToFilter));
          }, 'asc');
          query = query.groupBy(rankToFilter);
          query = query.limit(3);

          const result = await query.selectAll().execute();
          return result.map((item) => new LeaderboardOutput(item));

        case LeaderboardType.Surrounding:
          if (isEmpty(salesRepEmail)) {
            throw new Error(
              'salesRepEmail is required to get the surrounding data',
            );
          }

          const personal = await this.database
            .selectFrom('marks.Leaderboard')
            .selectAll('marks.Leaderboard')
            .where((eb) => {
              const filters: Expression<any>[] = [];

              filters.push(eb('salesRepEmail', 'ilike', salesRepEmail));

              if (filter.country) {
                filters.push(eb('country', '=', filter.country));
              }

              if (filter.month) {
                filters.push(eb('month', '=', filter.month));
              }

              if (filter.year) {
                filters.push(eb('year', '=', filter.year));
              }

              if (filter.quarter) {
                filters.push(eb('quarter', '=', filter.quarter));
              }

              return eb.and(filters);
            })
            .executeTakeFirstOrThrow();

          const all = await this.database
            .selectFrom('marks.Leaderboard')
            .orderBy(({ ref }) => {
              return integer(ref(rankToFilter));
            }, 'asc')
            .selectAll()
            .where((eb) => {
              const filters: Expression<any>[] = [];

              if (filter.year) {
                filters.push(eb('year', '=', filter.year));
              }

              if (filter.month) {
                filters.push(eb('month', '=', filter.month));
              }

              if (filter.country) {
                filters.push(eb('country', '=', filter.country));
              }

              if (filter.quarter) {
                filters.push(eb('quarter', '=', filter.quarter));
              }

              return eb.and(filters);
            })
            .execute();

          const personalIndex = all.findIndex(
            (item) => item.salesRepEmail === personal.salesRepEmail,
          );

          const startingIndex = personalIndex > 0 ? personalIndex - 1 : 0;

          const limit = 4;

          const surrounding = all.slice(
            Math.max(0, startingIndex),
            Math.min(all.length, startingIndex + limit),
          );

          if (surrounding.length < limit) {
            const diff = limit - surrounding.length;

            return all.slice(Math.max(0, startingIndex - diff), all.length);
          }

          return surrounding.map((item) => new LeaderboardOutput(item));
      }
    }
  }
}
