import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { LeaderboardService } from './leaderboard.service';
import { LeaderboardFilterArgs, LeaderboardOutput } from './dto/leaderboard.dto';

@Resolver()
export class LeaderboardResolver {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    private readonly userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [LeaderboardOutput])
  @UseGuards(AzureAuthGuard)
  async leaderboard(
    @UserEntity() userInfo,
    @Args() filter: LeaderboardFilterArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );
    return await this.leaderboardService.getLeaderboard(
      user[0].salesRepEmail,
      filter,
    );
  }
}
