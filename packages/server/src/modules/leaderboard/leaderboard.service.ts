import { Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';
import { Expression } from 'kysely';

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
  constructor(private readonly database: Database) {}

  async getLeaderboardOfSelf(salesRepEmail: string, filter: LeaderboardFilterArgs = { }) {
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

    if (filter.period) {
      const rankToFilter = periodToRank[filter.period] as SelectRankField;
      query = query.orderBy(({ ref }) => {
        return integer(ref(rankToFilter));
      }, 'asc');
    }

    const result = await query.selectAll().execute();
    return result.map((item) => new LeaderboardOutput(item));
  }

  async getLeaderboard(salesRepEmail: string, filter: LeaderboardFilterArgs = { }) {
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

    // month, quarter or year
    switch (filter.period) {
      case LeaderboardPeriod.Month:
        query = query.groupBy('month');
        break;
      case LeaderboardPeriod.Quarter:
        query = query.groupBy('quarter');
        break;
      case LeaderboardPeriod.Year:
        query = query.groupBy('year');
        break;
    }

    // top three or surrounding
    if (filter.type) {
      const rankToFilter = periodToRank[filter.period] as SelectRankField;

      switch (filter.type) {
        case LeaderboardType.TopThree:
          query = query.orderBy(({ ref }) => {
            return integer(ref(rankToFilter));
          }, 'asc');
          query = query.groupBy(rankToFilter);
          query = query.limit(3);
          break;

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

              if (filter.year) {
                filters.push(eb('year', '=', filter.year));
              }

              if (filter.month) {
                filters.push(eb('month', '=', filter.month));
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

    const result = await query.selectAll().execute();
    return result.map((item) => new LeaderboardOutput(item));
  }
}
