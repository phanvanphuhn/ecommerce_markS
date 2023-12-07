import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  OmitType,
} from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@ArgsType()
@InputType('CaseLogInput')
@ObjectType()
export class CaseLog {
  @Field(() => String, { nullable: true })
  caseName: string;
}

@InputType()
export class CaseLogInput extends CaseLog {
  @Field(() => [GraphQLUpload], { nullable: true })
  files: [Promise<FileUpload>];
}

@ObjectType()
export class CaseLogOutput extends CaseLog {
  constructor(caselog: Partial<CaseLog>) {
    super();
    Object.assign(this, caselog);
  }
}

@ArgsType()
export class PlanCallFilterArgs extends OmitType(CaseLog, ['caseName']) {}
