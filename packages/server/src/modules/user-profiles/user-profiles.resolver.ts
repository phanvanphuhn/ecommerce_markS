import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { UserProfilesService } from './user-profiles.service';
import { UserProfileOutput } from './dto/user-profile.dto';

@Resolver()
export class UserProfilesResolver {
  constructor(private readonly userProfilesService: UserProfilesService) {}

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
}
