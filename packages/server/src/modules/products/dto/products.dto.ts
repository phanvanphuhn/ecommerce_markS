import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  OmitType,
} from '@nestjs/graphql';
import { GraphQLDateTimeISO } from 'graphql-scalars';

@ArgsType()
@InputType('ProductInput')
@ObjectType()
export class Product {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  upn?: string;

  @Field(() => String, { nullable: true })
  gtin?: string;

  @Field(() => String, { nullable: true })
  upnDescription?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTimeISO, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLDateTimeISO, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class ProductInput extends Product {}

@ObjectType()
export class ProductOutput extends Product {
  constructor(data: Partial<Product>) {
    super();
    Object.assign(this, data);
  }
}

@ArgsType()
export class ProductFilterArgs extends OmitType(Product, ['country']) {
  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => Number, { nullable: true })
  skip?: number;
}
