import { Injectable } from '@nestjs/common';
import { ComparisonOperatorExpression } from 'kysely';

import { Database } from '../_database/database';
import { filterTypeMap } from '../../common/types/filter-type';

import {
  PlanCallFilterArgs,
  PlanCallInput,
  PlanCallOutput,
} from './dto/plan-call.dto';
import { PlanCallActivityType, PlanCallStatus } from './types/plan-call.types';

@Injectable()
export class EventsService {
  constructor(private database: Database) {}

  async getPlanCalls(salesRepEmail: string, filter: PlanCallFilterArgs) {
    let query = this.database.selectFrom('marks.PlanCall').selectAll();

    // determine whether to put "like" or "=" in the where clause for the strings
    const comparisionOperator: ComparisonOperatorExpression =
      (filterTypeMap[filter.filterType] as ComparisonOperatorExpression) || '=';

    if (filter.account) {
      query = query.where('account', comparisionOperator, filter.account);
    }

    if (filter.contactName) {
      query = query.where(
        'contactName',
        comparisionOperator,
        filter.contactName,
      );
    }

    if (filter.division) {
      query = query.where('division', comparisionOperator, filter.division);
    }

    if (filter.activityType) {
      query = query.where(
        'activityType',
        comparisionOperator,
        filter.activityType,
      );
    }

    if (filter.activitySubtype) {
      query = query.where(
        'activitySubtype',
        comparisionOperator,
        filter.activitySubtype,
      );
    }

    if (filter.ownerCountry) {
      query = query.where(
        'ownerCountry',
        comparisionOperator,
        filter.ownerCountry,
      );
    }

    if (filter.status) {
      query = query.where('status', comparisionOperator, filter.status);
    }

    if (filter.startDate) {
      query = query.where('startDate', '>=', filter.startDate);
    }

    if (filter.endDate) {
      query = query.where('endDate', '<=', filter.endDate);
    }

    if (filter.activityOwnerName) {
      query = query.where(
        'activityOwnerName',
        comparisionOperator,
        filter.activityOwnerName,
      );
    }

    if (filter.subject) {
      query = query.where('subject', comparisionOperator, filter.subject);
    }

    if (filter.description) {
      query = query.where(
        'description',
        comparisionOperator,
        filter.description,
      );
    }

    if (filter.location) {
      query = query.where('location', comparisionOperator, filter.location);
    }

    if (filter.createdAt) {
      query = query.where('createdAt', '>=', filter.createdAt);
    }

    if (filter.updatedAt) {
      query = query.where('updatedAt', '>=', filter.updatedAt);
    }

    query = query.where('activityOwnerEmail', '=', salesRepEmail);

    const planCalls = await query.execute();

    return planCalls.map((planCall) => new PlanCallOutput(planCall));
  }
  async getPlanCall(salesRepEmail: string, id: string) {
    const planCall = await this.database
      .selectFrom('marks.PlanCall')
      .selectAll()
      .where('id', '=', id)
      .where('activityOwnerEmail', '=', salesRepEmail)
      .executeTakeFirst();

    return new PlanCallOutput(planCall);
  }

  async upsertPlanCall(salesRepEmail: string, input: PlanCallInput) {
    const result = await this.database
      .insertInto('marks.PlanCall')
      .values({
        ...input,
        activityOwnerEmail: salesRepEmail,
        activityType: PlanCallActivityType.EVENT,
        status: PlanCallStatus[input.status],
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          ...input,
          updatedAt: new Date(),
          activityOwnerEmail: salesRepEmail,
          activityType: PlanCallActivityType.EVENT,
          status: PlanCallStatus[input.status],
        }),
      )
      .returningAll()
      .executeTakeFirst();

    return result;
  }
}
