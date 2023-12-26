import { Injectable } from '@nestjs/common';


import { Database } from '../_database/database';

import {
  SalesFilterArgs,
  SalesOutput,
  SliderAndCommissionOutput,
  TerritoryCategorizationOutput,
} from './dto/sales.dto';
import {
  MobileSalesFilterArgs,
  MobileSalesOutput,
  UpserMobileSalestQuarterArgs,
  UpserMobileSalestYearArgs,
} from './dto/mobile.sales.dto';

import { Sales, mobileSalesTargetType } from '@generated/kysely/types';

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
      .where('salesRepEmail', 'ilike', salesRepEmail);

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

  async getMobileSales(salesRepEmail: string, data: MobileSalesFilterArgs) {
    let query = this.database
      .selectFrom('marks.Mobile_Sales')
      .where('salesRepEmail', 'ilike', salesRepEmail);

    if (data.year) {
      query = query.where('year', '=', data.year);
    }

    if (data.quarter) {
      query = query.where('quarter', '=', data.quarter);
    }

    if (data.type) {
      query = query.where('type', '=', data.type);
    }

    const result = await query.selectAll().execute();

    return result.map((row) => new MobileSalesOutput(row));
  }

  async upsertMobileSalesQuarter(
    salesRepEmail: string,
    data: UpserMobileSalestQuarterArgs,
  ) {
    const salesRep = await this.database
      .selectFrom('marks.Mobile_Sales')
      .where((eb) =>
        eb.and({
          salesRepEmail,
          year: data.year,
          quarter: data.quarter,
        }),
      )
      .select('id')
      .executeTakeFirst();

    if (salesRep) {
      const result = await this.database
        .updateTable('marks.Mobile_Sales')
        .set(data)
        .where('id', '=', salesRep.id)
        .executeTakeFirst();

      return result.numUpdatedRows > 0;
    }

    const result = await this.database
      .insertInto('marks.Mobile_Sales')
      .values({
        salesRepEmail,
        ...data,
        type: mobileSalesTargetType.quarter,
      })
      .executeTakeFirst();

    return result.numInsertedOrUpdatedRows > 0;
  }

  async upsertMobileSalesYear(
    salesRepEmail: string,
    data: UpserMobileSalestYearArgs,
  ) {
    const salesRep = await this.database
      .selectFrom('marks.Mobile_Sales')
      .where((eb) =>
        eb.and({
          salesRepEmail,
          year: data.year,
          quarter: null,
        }),
      )
      .select('id')
      .executeTakeFirst();

    if (salesRep) {
      const result = await this.database
        .updateTable('marks.Mobile_Sales')
        .set(data)
        .where('id', '=', salesRep.id)
        .executeTakeFirst();

      return result.numUpdatedRows > 0;
    }

    const result = await this.database
      .insertInto('marks.Mobile_Sales')
      .values({
        salesRepEmail,
        ...data,
        type: mobileSalesTargetType.year,
      })
      .executeTakeFirst();

    return result.numInsertedOrUpdatedRows > 0;
  }
}
