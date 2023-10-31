import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AzureDirectoryUser {
  @Field(() => [String])
  businessPhones: string[];

  @Field(() => String)
  displayName: string;

  @Field(() => String)
  givenName: string;

  @Field(() => String, { nullable: true })
  jobTitle?: string;

  @Field(() => String, { nullable: true })
  mail: string;

  @Field(() => String, { nullable: true })
  mobilePhone: string;

  @Field(() => String, { nullable: true })
  officeLocation: string;

  @Field(() => String, { nullable: true })
  preferredLanguage?: string;

  @Field(() => String, { nullable: true })
  surname?: string;

  @Field(() => String, { nullable: true })
  userPrincipalName: string;

  @Field(() => String)
  id: string;
}
