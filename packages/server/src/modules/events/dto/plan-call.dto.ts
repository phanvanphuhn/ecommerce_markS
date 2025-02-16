import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';

import { FilterType } from '@/common/types/filter-type';

import {
  PlanCallStatus,
  PlanCallActivitySubtype,
  PlanCallActivityType,
} from '../types/plan-call.types';

registerEnumType(PlanCallStatus, {
  name: 'PlanCallStatus',
});

registerEnumType(PlanCallActivityType, {
  name: 'PlanCallActivityType',
});

registerEnumType(PlanCallActivitySubtype, {
  name: 'PlanCallActivitySubtype',
});

@ArgsType()
@InputType('PlanCallInput')
@ObjectType()
export class PlanCall {
  @Field(() => String, { nullable: true })
  uniqueIdInApp?: string;

  @Field(() => String, { nullable: true })
  salesForceId?: string;

  @Field(() => String, { nullable: true })
  subject?: string;

  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  account?: string;

  @Field(() => String, { nullable: true })
  contactId?: string;

  @Field(() => String, { nullable: true })
  contactName?: string;

  @Field(() => String, { nullable: true })
  division?: string;

  @Field(() => PlanCallActivityType, { nullable: true })
  activityType?: string;

  @Field(() => PlanCallActivitySubtype, { nullable: true })
  activitySubtype?: string;

  @Field(() => PlanCallStatus, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  activityOwnerName?: string;

  @Field(() => String, { nullable: true })
  activityOwnerEmail?: string;

  @Field(() => String, { nullable: true })
  ownerCountry?: string;

  @Field(() => Date, { nullable: true })
  createdInApp?: Date;

  @Field(() => Date, { nullable: true })
  lastModifiedInApp?: Date;
}

@InputType()
export class PlanCallInput extends PlanCall {}

@ObjectType()
export class PlanCallOutput extends PlanCall {
  constructor(planCall: Partial<PlanCall>) {
    super();
    Object.assign(this, planCall);
  }
}

@ArgsType()
export class PlanCallFilterArgs extends OmitType(PlanCall, [
  'salesForceId',
  'status',
]) {
  // @Field(() => FilterType, { nullable: true })
  // filterType?: FilterType;

  @Field(() => [PlanCallStatus], { nullable: true })
  status?: [string];
}
