import { ArgsType, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SliderAndCommissionOutput {
  constructor(data: Partial<SliderAndCommissionOutput>) {
    Object.assign(this, data);
  }

  @Field(() => String, { nullable: true })
  lowerBound: string;

  @Field(() => String, { nullable: true })
  upperBound: string;

  @Field(() => String, { nullable: true })
  variablePayoutPercentage: string;

  @Field(() => String, { nullable: true })
  territoryCategory: string;

  @Field(() => String, { nullable: true })
  commissionPercentage: string;
}

@ObjectType()
export class TerritoryCategorizationOutput {
  constructor(data: Partial<TerritoryCategorizationOutput>) {
    Object.assign(this, data);
  }

  @Field(() => String, { nullable: true })
  year: string;

  @Field(() => String, { nullable: true })
  lowerBound: string;

  @Field(() => String, { nullable: true })
  upperBound: string;

  @Field(() => String, { nullable: true })
  territoryCategory: string;
}

@ObjectType()
export class SalesOutput {
  constructor(data: Partial<SalesOutput>) {
    Object.assign(this, data);
  }

  @Field(() => String, { nullable: true })
  salesRepEmail: string;

  @Field(() => String, { nullable: true })
  year: string;

  @Field(() => String, { nullable: true })
  quarter: string;

  @Field(() => String, { nullable: true })
  month: string;

  @Field(() => String, { nullable: true })
  productType: string;

  @Field(() => String, { nullable: true })
  newHire: string;

  @Field(() => String, { nullable: true })
  guaranttedPayout: string;

  @Field(() => String, { nullable: true })
  mixedBag: string;

  @Field(() => String, { nullable: true })
  variablePayByMonth: string;

  @Field(() => String, { nullable: true })
  variablePayByYear: string;

  @Field(() => String, { nullable: true })
  variablePayByQuarter: string;

  @Field(() => String, { nullable: true })
  variablePayQ5: string;

  @Field(() => String, { nullable: true })
  salesByMonth: string;

  @Field(() => String, { nullable: true })
  salesByYear: string;

  @Field(() => String, { nullable: true })
  salesByQuarter: string;

  @Field(() => String, { nullable: true })
  targetByMonth: string;

  @Field(() => String, { nullable: true })
  targetByYear: string;

  @Field(() => String, { nullable: true })
  targetByQuarter: string;

  @Field(() => String, { nullable: true })
  salesAchievementPercentageByMonth: string;

  @Field(() => String, { nullable: true })
  salesAchievementPercentageByYear: string;

  @Field(() => String, { nullable: true })
  salesAchievementPercentageByQuarter: string;

  @Field(() => String, { nullable: true })
  variablePayoutPercentageByQuarter: string;

  @Field(() => String, { nullable: true })
  variablePayoutPercentageByYear: string;

  @Field(() => String, { nullable: true })
  targetByYearUSD: string;

  @Field(() => String, { nullable: true })
  territoryCategory: string;

  @Field(() => String, { nullable: true })
  commissionPercentageByQuarter: string;

  @Field(() => String, { nullable: true })
  commissionPayoutByQuarter: string;

  @Field(() => String, { nullable: true })
  variablePayoutByQuarter: string;

  @Field(() => String, { nullable: true })
  additionalPayout: string;

  @Field(() => String, { nullable: true })
  kicker: string;

  @Field(() => String, { nullable: true })
  earlyBirdEligibility: string;

  @Field(() => String, { nullable: true })
  earlyBird: string;

  @Field(() => String, { nullable: true })
  variablePayoutPercentageQ5: string;

  @Field(() => String, { nullable: true })
  variablePayoutQ5: string;

  @Field(() => String, { nullable: true })
  commissionPercentageQ5: string;

  @Field(() => String, { nullable: true })
  commissionPayoutQ5: string;

  @Field(() => String, { nullable: true })
  salesAchievementPercentageByYear_forNewHire: string;

  @Field(() => String, { nullable: true })
  variablePayoutPercentageQ5_forNewHire: string;

  @Field(() => String, { nullable: true })
  commissionPercentageQ5_forNewHire: string;

  @Field(() => String, { nullable: true })
  variablePayoutQ5_forNewHire: string;

  @Field(() => String, { nullable: true })
  commissionPayoutQ5_forNewHire: string;

  @Field(() => String, { nullable: true })
  capitalEquipment: string;

  @Field(() => String, { nullable: true })
  serviceContract: string;
}

@ArgsType()
export class SalesFilterArgs {
  @Field(() => String, { nullable: true })
  year?: string;

  @Field(() => String, { nullable: true })
  month?: string;

  @Field(() => String, { nullable: true })
  quarter?: string;
}
