import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-scalars';
import { UseGuards } from '@nestjs/common';


import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserEntity } from '../../common/decorators/user.decorator';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { CaseLogService } from './case-log.service';
import {
  CaseLogFilterArgs,
  CaseLogInput,
  CaseLogOutput,
} from './dto/case-log.dto';

import { CaseLogSubmission } from '@generated/nestgraphql/case-log-submission/case-log-submission.model';
import { CaseLog } from '@generated/nestgraphql/case-log/case-log.model';

@Resolver(() => CaseLog)
export class CaseLogResolver {
  constructor(
    private caseLogService: CaseLogService,
    private userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [CaseLog])
  @UseGuards(AzureAuthGuard)
  async getCaseLogs(@UserEntity() userInfo, @Args() filter: CaseLogFilterArgs) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.caseLogService.getCaseLogs(user[0].salesRepEmail, filter);
  }

  @Query(() => CaseLog)
  @UseGuards(AzureAuthGuard)
  async getCaseLog(@UserEntity() userInfo, @Args('id') id: string) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.caseLogService.getCaseLog(user[0].salesRepEmail, id);
  }

  @Mutation(() => CaseLog)
  @UseGuards(AzureAuthGuard)
  async upsertCaseLog(
    @UserEntity() userInfo,
    @Args('data') data: CaseLogInput,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.caseLogService.upsertCaseLog(user[0].salesRepEmail, data);
  }

  @Mutation(() => CaseLog)
  async testUpsertCaseLog(
    @UserEntity() userInfo,
    @Args('data') data: CaseLogInput,
  ) {
    return this.caseLogService.upsertCaseLog('test@email.com', data);
  }

  @Query(() => GraphQLJSON)
  @UseGuards(AzureAuthGuard)
  async getFile(@UserEntity() userInfo, @Args('filePath') filePath: string) {
    const user = await this.userProfilesService.getUserProfileByNetworkId(
      userInfo.samAccountName,
    );

    return await this.caseLogService.getFile(
      `${user[0].salesRepEmail}/${filePath}`,
    );
  }

  @ResolveField('caseLogSubmissions', () => [CaseLogSubmission])
  async getCaseLogSubmissions(@Parent() parent: CaseLog) {
    return this.caseLogService.getCaseLogSubmissionsByCaselogId(parent.id);
  }
}
