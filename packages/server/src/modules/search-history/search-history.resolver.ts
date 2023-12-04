import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../../common/decorators/user.decorator';

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
  async getSearchHistory(
    @UserEntity() userInfo,
    @Args() filter: MobileSearchHistoryFilterArgs,
  ) {
    return this.searchHistoryService.getSearchHistory('testemail', filter);
  }

  @Mutation(() => MobileSearchHistoryOutput)
  async upsertSearchHistory(
    @UserEntity() userInfo,
    @Args('data') input: MobileSearchHistoryInput,
  ) {
    return this.searchHistoryService.upsertSearchHistory('testemail', input);
  }
}
