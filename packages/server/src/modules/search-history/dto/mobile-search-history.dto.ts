import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { SearchType } from '@prisma/client';
import {
  GraphQLJSONObject,
  GraphQLDateTime,
  GraphQLDate,
  GraphQLDateTimeISO,
} from 'graphql-scalars';

import { OrderDirection } from '../../../common/pagination/order-direction';

registerEnumType(SearchType, {
  name: 'SearchType',
});

@ArgsType()
@InputType('MobileSearchInput')
@ObjectType()
export class MobileSearchHistory {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  searchQuery?: string;

  @Field(() => [SearchType], { nullable: true })
  searchType?: string[];

  @Field(() => GraphQLJSONObject, { nullable: true })
  searchResults?: Record<string, any>;

  @Field(() => GraphQLDateTimeISO, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLDateTimeISO, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class MobileSearchHistoryInput extends OmitType(MobileSearchHistory, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  @Field(() => String)
  searchQuery: string;

  @Field(() => [SearchType], { nullable: true })
  searchType?: string[];
}

@ObjectType()
export class MobileSearchHistoryOutput extends MobileSearchHistory {
  constructor(data: MobileSearchHistory) {
    super();

    Object.assign(this, data);
  }
  @Field(() => [String], { nullable: true })
  searchType?: string[];
}

@ArgsType()
export class MobileSearchHistoryFilterArgs {
  @Field(() => [SearchType], { nullable: true })
  searchType?: string[];

  @Field(() => OrderDirection, { nullable: true })
  sort?: OrderDirection;

  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => Number, { nullable: true })
  skip?: number;
}
