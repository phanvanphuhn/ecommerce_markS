import { Args, OmitType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { LeaderboardService } from '../leaderboard/leaderboard.service';
import { LeaderboardFilterArgsWithoutType, LeaderboardOutput } from '../leaderboard/dto/leaderboard.dto';

import { UserProfilesService } from './user-profiles.service';
import { UserProfileOutput } from './dto/user-profile.dto';


@Resolver(() => UserProfileOutput)
export class UserProfilesResolver {
  constructor(private readonly userProfilesService: UserProfilesService, private readonly leaderboardService: LeaderboardService) {}

  @Query(() => [UserProfileOutput])
  @UseGuards(AzureAuthGuard)
  async getUserProfile(@UserEntity() userInfo) {
    const { email, samAccountName: networkId } = userInfo;

    if (!networkId) {
      throw new Error('Network ID not found');
    }

    return await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
      networkId,
    );
  }

  @ResolveField('leaderboard', () => [LeaderboardOutput])
  async getLeaderboard(@Parent() parent: UserProfileOutput, @Args() filter: LeaderboardFilterArgsWithoutType) {
    const leaderboards = await this.leaderboardService.getLeaderboardOfSelf(parent.salesRepEmail, filter);

    return leaderboards; 
  }
}
