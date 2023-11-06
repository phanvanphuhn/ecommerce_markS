import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { LeaderboardService } from './leaderboard.service';
import { LeaderboardFilterArgs, LeaderboardOuput } from './dto/leaderboard.dto';

@Resolver()
export class LeaderboardResolver {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Query(() => [LeaderboardOuput])
  @UseGuards(AzureAuthGuard)
  async leaderboard(
    @UserEntity() userInfo,
    @Args() filter: LeaderboardFilterArgs,
  ) {
    return await this.leaderboardService.getLeaderboard(userInfo.email, filter);
  }
}
