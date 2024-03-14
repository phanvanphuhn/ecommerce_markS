import {
  Args,
  ArgsType,
  Field,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { Leaderboard } from '@generated/nestgraphql/leaderboard/leaderboard.model';

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
export class LeaderboardOutput extends Leaderboard {
  constructor(data: Partial<LeaderboardOutput>) {
    super();
    Object.assign(this, data);
  }
}

@ObjectType()
export class LeaderboardOutputWithoutQuarter extends OmitType(Leaderboard, [
  'id',
  'lastRefreshedTimestamp',
  'quarter',
  'rankQtd',
]) {}

@ArgsType()
export class LeaderboardFilterArgs {
  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  year?: string;

  @Field(() => String, { nullable: true })
  month?: string;

  @Field(() => String, { nullable: true })
  quarter?: string;

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

@ArgsType()
export class LeaderboardFilterArgsWithoutType extends OmitType(
  LeaderboardFilterArgs,
  ['type'],
) {}
