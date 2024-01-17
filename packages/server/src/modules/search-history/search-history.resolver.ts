import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '../../common/decorators/user.decorator';
import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { SearchHistoryService } from './search-history.service';
import {
  MobileSearchHistoryFilterArgs,
  MobileSearchHistoryInput,
  MobileSearchHistoryOutput,
} from './dto/mobile-search-history.dto';

@Resolver()
export class SearchHistoryResolver {
  constructor(
    private searchHistoryService: SearchHistoryService,
    private readonly userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [MobileSearchHistoryOutput])
  @UseGuards(AzureAuthGuard)
  async getSearchHistory(
    @UserEntity() userInfo,
    @Args() filter: MobileSearchHistoryFilterArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.searchHistoryService.getSearchHistory(
      user[0].salesRepEmail,
      filter,
    );
  }

  @Mutation(() => MobileSearchHistoryOutput)
  @UseGuards(AzureAuthGuard)
  async upsertSearchHistory(
    @UserEntity() userInfo,
    @Args('data') input: MobileSearchHistoryInput,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.searchHistoryService.upsertSearchHistory(
      user[0].salesRepEmail,
      input,
    );
  }
}
