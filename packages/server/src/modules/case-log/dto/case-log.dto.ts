import {
  ArgsType,
  Field,
  GraphQLISODateTime,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

import { CaseLogStatus } from '../types/case-log.types';

registerEnumType(CaseLogStatus, {
  name: 'CaseLogStatus',
  description: 'The status of the case log',
});

@ArgsType()
@InputType('CaseLogInput')
@ObjectType()
export class CaseLog {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  caseName: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startDate?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endDate?: Date;

  @Field(() => String, { nullable: true })
  account?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  contact?: string;

  @Field(() => String, { nullable: true })
  secondaryContact?: string;

  @Field(() => String, { nullable: true })
  activityOwnerName?: string;

  @Field(() => String, { nullable: true })
  activityOwnerEmail?: string;

  @Field(() => CaseLogStatus, { nullable: true })
  status?: string;

  @Field(() => [String], { nullable: true })
  photoPaths?: string[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class CaseLogInput extends CaseLog {
  @Field(() => [GraphQLUpload], { nullable: true })
  files?: [Promise<FileUpload>];
}

@ObjectType()
export class CaseLogOutput extends CaseLog {
  constructor(caselog: Partial<CaseLog>) {
    super();
    Object.assign(this, caselog);
  }
}

@ArgsType()
export class CaseLogFilterArgs extends OmitType(CaseLog, [
  'activityOwnerEmail',
  'activityOwnerName',
]) {}
