import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { ComplaintsService } from './complaints.service';
import { ComplaintsOutput } from './dto/complaints.dto';

@Resolver()
export class ComplaintsResolver {
  constructor(
    private complaintsService: ComplaintsService,
    private userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [ComplaintsOutput])
  @UseGuards(AzureAuthGuard)
  complaints(@UserEntity() userInfo) {
    const user =
      this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );
    return this.complaintsService.getComplaints(user[0].salesRepEmail);
  }

  @Query(() => ComplaintsOutput)
  @UseGuards(AzureAuthGuard)
  complaint(@Args('id') id: number) {
    return this.complaintsService.getComplaint(id);
  }
}
