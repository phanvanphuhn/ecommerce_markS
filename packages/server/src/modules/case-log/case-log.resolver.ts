import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';

import { FileUpload } from '../../common/types/file-upload';

import { CaseLogService } from './case-log.service';
import { CaseLogInput } from './dto/case-log.dto';

@Resolver()
export class CaseLogResolver {
  constructor(private caseLogService: CaseLogService) {}

  @Mutation(() => String)
  async testUploadFile(@Args('data') data: CaseLogInput) {
    const test = await this.caseLogService.testUploadFile(data);
    return 'createCaseLog';
  }
}
