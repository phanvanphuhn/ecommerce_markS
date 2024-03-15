import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sales, mobileSalesTargetType } from '@generated/kysely/types';

import { OrderDirection } from '@/common/pagination/order-direction';

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
import {
  SalesInvoicesFilterArgs,
  SalesInvoicesOutput,
} from './dto/sales-invoices.dto';

@Injectable()
export class SalesService {
  constructor(
    private readonly database: Database,
    readonly configService: ConfigService,
  ) {}

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

    if (this.configService.get('globalConfig.deployEnv') === 'stage-ap') {
      filter.year = filter.year ? '2023' : null;
      filter.month = filter.month ? '2' : null;
    }

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

    if (this.configService.get('globalConfig.deployEnv') === 'stage-ap') {
      data.year = data.year ? '2023' : null;
    }

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
    if (this.configService.get('globalConfig.deployEnv') === 'stage-ap') {
      data.year = data.year ? '2023' : null;
    }

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

  async getSalesInvoices(
    salesRepEmail: string,
    filter: SalesInvoicesFilterArgs,
  ) {
    let query = this.database.selectFrom('marks.SalesInvoices');

    if (filter.accountName) {
      query = query.where('accountName', 'ilike', filter.accountName);
    }

    if (filter.invoiceDate) {
      query = query.where('invoiceDate', '=', filter.invoiceDate);
    }

    if (filter.id) {
      query = query.where('id', '=', filter.id);
    }

    if (filter.createdAt) {
      query = query.where('createdAt', '>=', filter.createdAt);
    }

    if (filter.updatedAt) {
      query = query.where('updatedAt', '>=', filter.updatedAt);
    }

    if (filter.skip) {
      query = query.offset(filter.skip);
    }

    if (filter.take) {
      query = query.limit(filter.take);
    }

    if (filter.orderBy) {
      switch (filter.orderBy) {
        case OrderDirection.asc:
          query = query.orderBy('invoiceDate', 'asc');
          break;
        case OrderDirection.desc:
          query = query.orderBy('invoiceDate', 'desc');
          break;
      }
    }

    const result = await query.selectAll().execute();

    return result.map((row) => new SalesInvoicesOutput(row));
  }
}
