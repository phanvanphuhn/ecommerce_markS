import { ArgsType, Field, ObjectType } from '@nestjs/graphql';

@ArgsType()
export class ContactSearchArgs {
  @Field(() => String, { nullable: true })
  doctorName?: string;

  @Field(() => String, { nullable: true })
  doctorTitle?: string;

  @Field(() => String, { nullable: true })
  hospital?: string;

  @Field(() => [String], { nullable: true })
  doctorDivision?: [string];

  @Field(() => [String], { nullable: true })
  doctorSpecialty?: [string];

  @Field(() => String, { nullable: true })
  doctorAlternativeEmail?: string;

  @Field(() => String, { nullable: true })
  doctorCountry?: string;

  @Field(() => [String], { nullable: true })
  topicsOfInterest?: [string];
}

@ObjectType()
export class ContactSearchOutput {
  constructor(data: Partial<ContactSearchOutput>) {
    Object.assign(this, data);
  }

  @Field(() => Number, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  doctorName!: string;
  @Field(() => String, { nullable: true })
  doctorTitle!: string;
  @Field(() => String, { nullable: true })
  hospital!: string;
  @Field(() => String, { nullable: true })
  doctorDivision!: string;
  @Field(() => String, { nullable: true })
  doctorSpecialty!: string;
  @Field(() => String, { nullable: true })
  doctorEmail!: string;
  @Field(() => String, { nullable: true })
  doctorPhone!: string;
  @Field(() => String, { nullable: true })
  doctorAlternativeEmail!: string;
  @Field(() => String, { nullable: true })
  topicsOfInterest!: string;
  @Field(() => String, { nullable: true })
  doctorCountry!: string;
}

@ArgsType()
export class HospitalFilterArgs {
  // specialtiy and division and topics of interetst
  @Field(() => [String], { nullable: true })
  doctorSpecialty?: [string];

  @Field(() => String, { nullable: true })
  doctorDivision?: string;

  @Field(() => [String], { nullable: true })
  topicsOfInterest?: [string];
}
