import { Injectable } from '@nestjs/common';
import { Sales } from '@generated/kysely/types';

import { Database } from '../_database/database';

import {
  SalesFilterArgs,
  SalesOutput,
  SliderAndCommissionOutput,
  TerritoryCategorizationOutput,
} from './dto/sales.dto';

@Injectable()
export class SalesService {
  constructor(private readonly database: Database) {}

  async getSliderAndCommisions(): Promise<SliderAndCommissionOutput[]> {
    return await this.database
      .selectFrom('marks.SliderAndCommission')
      .selectAll()
      .execute();
  }

  async getTerritoryCategorization(): Promise<TerritoryCategorizationOutput[]> {
    return await this.database
      .selectFrom('marks.TerritoryCategorization')
      .selectAll()
      .execute();
  }

  async getSalesByEmail(
    salesRepEmail: string,
    filter: SalesFilterArgs,
  ): Promise<SalesOutput[]> {
    let query = this.database
      .selectFrom('marks.Sales')
      .where('salesRepEmail', '=', salesRepEmail);

    if (filter.year) {
      query = query.where('year', '=', filter.year);
    }

    if (filter.quarter) {
      query = query.where('quarter', '=', filter.quarter);
    }

    if (filter.month) {
      query = query.where('month', '=', filter.month);
    }

    const result = await query.selectAll().execute();

    return result.map((row) => new SalesOutput(row));
  }
}
