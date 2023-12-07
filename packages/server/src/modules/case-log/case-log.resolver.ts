import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-scalars';

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

  @Query(() => GraphQLJSON)
  async testGetFile(@Args('filePath') filePath: string) {
    return await this.caseLogService.testGetFile(filePath);
  }
}
