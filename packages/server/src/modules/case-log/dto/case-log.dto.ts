import {
  ArgsType,
  Field,
  GraphQLISODateTime,
  ID,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

import { CaseLogStatus } from '../types/case-log.types';

import { CaseLogSubmission } from '@generated/nestgraphql/case-log-submission/case-log-submission.model';
import { CaseLog } from '@generated/nestgraphql/case-log/case-log.model';
import { CaseLogCreateInput } from '@generated/nestgraphql/case-log/case-log-create.input';
import { CaseLogCreateWithoutCaseLogSubmissionInput } from '@generated/nestgraphql/case-log/case-log-create-without-case-log-submission.input';


registerEnumType(CaseLogStatus, {
  name: 'CaseLogStatus',
  description: 'The status of the case log',
});

@InputType()
export class CaseLogSubmissionInputCreate extends OmitType(CaseLogSubmission, [
  'caseLog',
  'createdAt',
  'updatedAt',
  'product',
  'salesRepEmail',
  'id',
]) {
  @Field(() => String, { nullable: true })
  productId!: string | null;

  @Field(() => String, { nullable: true })
  quantity!: string | null;
}

@InputType()
export class CaseLogSubmissionInputUpdate extends OmitType(CaseLogSubmission, [
  'caseLog',
  'createdAt',
  'updatedAt',
  'product',
  'salesRepEmail',
  'caseLogId',
  'id',
]) {
  @Field(() => String, { nullable: true })
  productId!: string | null;

  @Field(() => String, { nullable: true })
  quantity!: string | null;
}

@InputType()
export class CaseLogInput extends OmitType(
  CaseLogCreateWithoutCaseLogSubmissionInput,
  ['photoPaths'],
) {
  @Field(() => [GraphQLUpload], { nullable: true })
  files?: [Promise<FileUpload>];

  @Field(() => [String], { nullable: true })
  photoPaths?: string[];

  @Field(() => [CaseLogSubmissionInputCreate], { nullable: true })
  caseLogSubmissions?: [CaseLogSubmissionInputCreate];
}

@ObjectType()
export class CaseLogOutput extends CaseLog {
  constructor(caseLog: CaseLog) {
    super();
    Object.assign(this, caseLog);
  }

  @Field(() => [CaseLogSubmission], { nullable: true })
  caseLogSubmissions?: CaseLogSubmission[];
}

@ArgsType()
export class CaseLogFilterArgs extends OmitType(CaseLog, [
  'activityOwnerEmail',
  'activityOwnerName',
]) {}
