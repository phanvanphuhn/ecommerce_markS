import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { EventsService } from './events.service';
import {
  PlanCallFilterArgs,
  PlanCallInput,
  PlanCallOutput,
} from './dto/plan-call.dto';
import { PlanCallActivitySubtype } from './types/plan-call.types';

@Resolver()
export class EventsResolver {
  constructor(
    private eventsService: EventsService,
    private readonly userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [PlanCallOutput])
  @UseGuards(AzureAuthGuard)
  async getPlanCalls(
    @UserEntity() userInfo,
    @Args() filter: PlanCallFilterArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );
    return this.eventsService.getPlanCalls(user[0].salesRepEmail, filter);
  }

  @Query(() => [String])
  async getPlanCallTypes() {
    return Object.values(PlanCallActivitySubtype);
  }

  @Query(() => PlanCallOutput)
  @UseGuards(AzureAuthGuard)
  async getPlanCall(@UserEntity() userInfo, @Args('id') id: string) {
    const user = await this.userProfilesService.getUserProfileByNetworkId(
      userInfo.samAccountName,
    );
    return this.eventsService.getPlanCall(user[0].salesRepEmail, id);
  }

  @Mutation(() => PlanCallOutput)
  @UseGuards(AzureAuthGuard)
  async upsertPlanCall(
    @UserEntity() userInfo,
    @Args('data') input: PlanCallInput,
  ) {
    const user = await this.userProfilesService.getUserProfileByNetworkId(
      userInfo.samAccountName,
    );

    return this.eventsService.upsertPlanCall(user[0].salesRepEmail, {
      ...input,
      activityOwnerName: user[0].fullName,
    });
  }
}
