import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '../../common/decorators/user.decorator';
import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { SearchHistoryService } from './search-history.service';
import {
  MobileSearchHistoryFilterArgs,
  MobileSearchHistoryInput,
  MobileSearchHistoryOutput,
} from './dto/mobile-search-history.dto';

@Resolver()
export class SearchHistoryResolver {
  constructor(private searchHistoryService: SearchHistoryService) {}

  @Query(() => [MobileSearchHistoryOutput])
  @UseGuards(AzureAuthGuard)
  async getSearchHistory(
    @UserEntity() userInfo,
    @Args() filter: MobileSearchHistoryFilterArgs,
  ) {
    return this.searchHistoryService.getSearchHistory(userInfo.email, filter);
  }

  @Mutation(() => MobileSearchHistoryOutput)
  @UseGuards(AzureAuthGuard)
  async upsertSearchHistory(
    @UserEntity() userInfo,
    @Args('data') input: MobileSearchHistoryInput,
  ) {
    return this.searchHistoryService.upsertSearchHistory(userInfo.email, input);
  }
}
