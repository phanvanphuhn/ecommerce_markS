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

    if (filter.account) {
      query = query.where('account', 'ilike', `%${filter.account}%`);
    }

    if (filter.contactName) {
      query = query.where('contactName', 'ilike', `%${filter.contactName}%`);
    }

    if (filter.division) {
      query = query.where('division', 'ilike', `%${filter.division}%`);
    }

    if (filter.activityType) {
      query = query.where('activityType', 'ilike', `%${filter.activityType}%`);
    }

    if (filter.activitySubtype) {
      query = query.where(
        'activitySubtype',
        'ilike',
        `%${filter.activitySubtype}%`,
      );
    }

    if (filter.ownerCountry) {
      query = query.where('ownerCountry', 'ilike', `%${filter.ownerCountry}%`);
    }

    // status is an array
    if (filter.status) {
      query = query.where('status', 'in', filter.status);
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
        'ilike',
        `%${filter.activityOwnerName}%`,
      );
    }

    if (filter.subject) {
      query = query.where('subject', 'ilike', `%${filter.subject}%`);
    }

    if (filter.description) {
      query = query.where('description', 'ilike', filter.description);
    }

    if (filter.location) {
      query = query.where('location', 'ilike', `%${filter.location}%`);
    }

    if (filter.createdInApp) {
      query = query.where('createdInApp', '>=', filter.createdInApp);
    }

    if (filter.lastModifiedInApp) {
      query = query.where('lastModifiedInApp', '>=', filter.lastModifiedInApp);
    }

    query = query.where('activityOwnerEmail', '=', salesRepEmail);

    const planCalls = await query.execute();

    return planCalls.map((planCall) => new PlanCallOutput(planCall));
  }

  async getPlanCall(salesRepEmail: string, id: string) {
    const planCall = await this.database
      .selectFrom('marks.PlanCall')
      .selectAll()
      .where('uniqueIdInApp', '=', id)
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
        oc.column('uniqueIdInApp').doUpdateSet({
          ...input,
          lastModifiedInApp: new Date(),
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
