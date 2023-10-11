import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserProfileOutput {
  constructor(data: Partial<UserProfileOutput>) {
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
  division: string;
  @Field(() => String, { nullable: true })
  reportingTo: string;
}
