import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SliderAndCommission } from '@generated/kysely/types';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { SalesService } from './sales.service';
import {
  SalesFilterArgs,
  SalesOutput,
  SliderAndCommissionOutput,
  TerritoryCategorizationOutput,
} from './dto/sales.dto';

@Resolver()
export class SalesResolver {
  constructor(private readonly salesService: SalesService) {}

  @Query(() => [SliderAndCommissionOutput])
  @UseGuards(AzureAuthGuard)
  async getSliderAndCommisions() {
    return await this.salesService.getSliderAndCommisions();
  }

  @Query(() => [TerritoryCategorizationOutput])
  @UseGuards(AzureAuthGuard)
  async getTerritoryCategorization() {
    return await this.salesService.getTerritoryCategorization();
  }

  @Query(() => [SalesOutput])
  @UseGuards(AzureAuthGuard)
  async getSalesByEmail(
    @UserEntity() userInfo,
    @Args() filter: SalesFilterArgs,
  ) {
    return await this.salesService.getSalesByEmail(userInfo.email, filter);
  }
}
