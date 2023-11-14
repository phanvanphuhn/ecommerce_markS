import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { EventsService } from './events.service';
import {
  PlanCallFilterArgs,
  PlanCallInput,
  PlanCallOutput,
} from './dto/plan-call.dto';
import { PlanCallActivitySubtype } from './types/plan-call.types';

@Resolver()
export class EventsResolver {
  constructor(private eventsService: EventsService) {}

  @Query(() => [PlanCallOutput])
  @UseGuards(AzureAuthGuard)
  async getPlanCalls(
    @UserEntity() userInfo,
    @Args() filter: PlanCallFilterArgs,
  ) {
    return this.eventsService.getPlanCalls(userInfo.email, filter);
  }

  @Query(() => [String])
  async getPlanCallTypes() {
    return Object.values(PlanCallActivitySubtype);
  }

  @Query(() => PlanCallOutput)
  @UseGuards(AzureAuthGuard)
  async getPlanCall(@UserEntity() userInfo, @Args('id') id: string) {
    return this.eventsService.getPlanCall(userInfo.email, id);
  }

  @Mutation(() => PlanCallOutput)
  @UseGuards(AzureAuthGuard)
  async upsertPlanCall(
    @UserEntity() userInfo,
    @Args('data') input: PlanCallInput,
  ) {
    return this.eventsService.upsertPlanCall(userInfo.email, input);
  }
}
