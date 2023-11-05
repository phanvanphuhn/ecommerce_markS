import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
import {
  MobileSalesFilterArgs,
  MobileSalesOutput,
  UpserMobileSalestQuarterArgs,
  UpserMobileSalestYearArgs,
} from './dto/mobile.sales.dto';

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
  async getSales(@UserEntity() userInfo, @Args() filter: SalesFilterArgs) {
    return await this.salesService.getSalesByEmail(userInfo.email, filter);
  }

  @Query(() => [MobileSalesOutput])
  @UseGuards(AzureAuthGuard)
  async getMobileSales(
    @UserEntity() userInfo,
    @Args() filter: MobileSalesFilterArgs,
  ) {
    return await this.salesService.getMobileSales(userInfo.email, filter);
  }

  @Mutation(() => Boolean)
  @UseGuards(AzureAuthGuard)
  async upsertMobileSalesQuarter(
    @Args() data: UpserMobileSalestQuarterArgs,
    @UserEntity() userInfo,
  ) {
    return await this.salesService.upsertMobileSalesQuarter(
      userInfo.email,
      data,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(AzureAuthGuard)
  async upsertMobileSalesYear(
    @Args() data: UpserMobileSalestYearArgs,
    @UserEntity() userInfo,
  ) {
    return await this.salesService.upsertMobileSalesYear(userInfo.email, data);
  }
}
