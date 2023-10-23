import {
  Args,
  ArgsType,
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Transform } from 'class-transformer';

export enum LeaderboardType {
  TopThree = 'TopThree',
  Surrounding = 'Surrounding',
}

export enum LeaderboardPeriod {
  Year = 'Year',
  Month = 'Month',
  Quarter = 'Quarter',
}

registerEnumType(LeaderboardType, {
  name: 'LeaderboardType',
});

registerEnumType(LeaderboardPeriod, {
  name: 'LeaderboardPeriod',
});

@ObjectType()
export class LeaderboardOuput {
  constructor(data: Partial<LeaderboardOuput>) {
    Object.assign(this, data);
  }

  @Field(() => Number, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  fullName: string;

  @Field(() => String, { nullable: true })
  salesRepEmail: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => String, { nullable: true })
  year: string;

  @Field(() => String, { nullable: true })
  month: string;

  @Field(() => String, { nullable: true })
  targetAchievedYtd: string;

  @Field(() => String, { nullable: true })
  rankYtd: string;

  @Field(() => String, { nullable: true })
  targetAchievedQtd: string;

  @Field(() => String, { nullable: true })
  rankQtd: string;

  @Field(() => String, { nullable: true })
  targetAchievedMtd: string;

  @Field(() => String, { nullable: true })
  rankMtd: string;

  @Field(() => Date, { nullable: true })
  lastRefreshedTimestamp: Date;
}

@ArgsType()
export class LeaderboardFilterArgs {
  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String)
  year: string;

  @Field(() => String, { nullable: true })
  month?: string;

  @Field(() => LeaderboardType, {
    nullable: true,
    defaultValue: LeaderboardType.TopThree,
  })
  type?: LeaderboardType;

  @Field(() => LeaderboardPeriod, {
    nullable: true,
    defaultValue: LeaderboardPeriod.Month,
  })
  period?: LeaderboardPeriod;
}
