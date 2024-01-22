import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ComplaintsOutput {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  complaintId?: string;

  @Field({ nullable: true })
  salesRepEmail?: string;

  @Field({ nullable: true })
  complaintName?: string;

  @Field({ nullable: true })
  complaintStatus?: string;

  @Field({ nullable: true })
  eventDate?: string;

  @Field({ nullable: true })
  createdDate?: string;

  @Field({ nullable: true })
  complaintTitle?: string;

  @Field({ nullable: true })
  division?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  awareDate?: string;

  @Field({ nullable: true })
  timeOfEvent?: string;

  @Field({ nullable: true })
  typeOfSituationReporting?: string;
}
