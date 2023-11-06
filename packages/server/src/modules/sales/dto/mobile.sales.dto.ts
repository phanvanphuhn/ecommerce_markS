import { ArgsType, Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { mobileSalesTargetType } from '@generated/kysely/types';

registerEnumType(mobileSalesTargetType, {
  name: 'mobileSalesTargetType',
});

@ArgsType()
export class MobileSalesFilterArgs {
  @Field(() => String, { nullable: true })
  quarter?: string;

  @Field(() => String, { nullable: true })
  year?: string;

  @Field(() => mobileSalesTargetType)
  type: mobileSalesTargetType;
}

@ObjectType()
export class MobileSalesOutput {
  constructor(data: Partial<MobileSalesOutput>) {
    Object.assign(this, data);
  }

  @Field(() => String)
  salesRepEmail: string;

  @Field(() => String, { nullable: true })
  targetByQuarter?: string;

  @Field(() => String, { nullable: true })
  targetByYear?: string;

  @Field(() => String, { nullable: true })
  quarter: string;

  @Field(() => String, { nullable: true })
  year: string;

  @Field(() => mobileSalesTargetType)
  type: mobileSalesTargetType;
}

@ArgsType()
export class UpserMobileSalestQuarterArgs {
  @Field(() => String)
  targetByQuarter: string;

  @Field(() => String)
  year: string;

  @Field(() => String)
  quarter: string;
}

@ArgsType()
export class UpserMobileSalestYearArgs {
  @Field(() => String)
  targetByYear: string;

  @Field(() => String)
  year: string;
}
