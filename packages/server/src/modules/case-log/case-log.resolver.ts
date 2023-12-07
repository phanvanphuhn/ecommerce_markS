import { userInfo } from 'os';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-scalars';
import { UseGuards } from '@nestjs/common';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserEntity } from '../../common/decorators/user.decorator';

import { CaseLogService } from './case-log.service';
import {
  CaseLogFilterArgs,
  CaseLogInput,
  CaseLogOutput,
} from './dto/case-log.dto';

@Resolver()
export class CaseLogResolver {
  constructor(private caseLogService: CaseLogService) {}

  @Query(() => [CaseLogOutput])
  @UseGuards(AzureAuthGuard)
  async getCaseLogs(@UserEntity() userInfo, @Args() filter: CaseLogFilterArgs) {
    return this.caseLogService.getCaseLogs(userInfo.email, filter);
  }

  @Query(() => CaseLogOutput)
  @UseGuards(AzureAuthGuard)
  async getCaseLog(@UserEntity() userInfo, @Args('id') id: string) {
    return this.caseLogService.getCaseLog(userInfo.email, id);
  }

  @Mutation(() => CaseLogOutput)
  @UseGuards(AzureAuthGuard)
  async upsertCaseLog(
    @UserEntity() userInfo,
    @Args('data') data: CaseLogInput,
  ) {
    return this.caseLogService.upsertCaseLog(userInfo.email, data);
  }

  @Query(() => GraphQLJSON)
  @UseGuards(AzureAuthGuard)
  async getFile(@UserEntity() userInfo, @Args('filePath') filePath: string) {
    return await this.caseLogService.getFile(`${userInfo.email}/${filePath}`);
  }
}
