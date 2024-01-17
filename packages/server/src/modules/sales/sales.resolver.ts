import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';


import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

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

import { SliderAndCommission } from '@generated/kysely/types';


@Resolver()
export class SalesResolver {
  constructor(
    private readonly salesService: SalesService,
    private readonly userProfilesService: UserProfilesService,
  ) {}

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
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return await this.salesService.getSalesByEmail(
      user[0].salesRepEmail,
      filter,
    );
  }

  @Query(() => [MobileSalesOutput])
  @UseGuards(AzureAuthGuard)
  async getMobileSales(
    @UserEntity() userInfo,
    @Args() filter: MobileSalesFilterArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return await this.salesService.getMobileSales(
      user[0].salesRepEmail,
      filter,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(AzureAuthGuard)
  async upsertMobileSalesQuarter(
    @Args() data: UpserMobileSalestQuarterArgs,
    @UserEntity() userInfo,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return await this.salesService.upsertMobileSalesQuarter(
      user[0].salesRepEmail,
      data,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(AzureAuthGuard)
  async upsertMobileSalesYear(
    @Args() data: UpserMobileSalestYearArgs,
    @UserEntity() userInfo,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return await this.salesService.upsertMobileSalesYear(
      user[0].salesRepEmail,
      data,
    );
  }
}
