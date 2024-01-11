import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserEntity } from '../../common/decorators/user.decorator';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { ProductFilterArgs, ProductOutput } from './dto/products.dto';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private userProfilesService: UserProfilesService,
  ) {}

  @Query(() => ProductOutput)
  @UseGuards(AzureAuthGuard)
  async getProducts(@UserEntity() userInfo, @Args() args: ProductFilterArgs) {
    const user = await this.userProfilesService.getUserProfileBySalesRepEmail(
      userInfo.email,
    );

    if (!user) {
      throw new Error('User not found');
    }

    const country = user
      .map((user) => user.country)
      .find((country) => country !== null);

    return this.productsService.getProducts(country, args);
  }

  // @Query(() => ProductOutput)
  // @UseGuards(AzureAuthGuard)
  // async getProductsByUserCountry(@UserEntity() userInfo) {
  //   return this.productsService.getProductsByUserCountry(userInfo.email);
  // }

  // @Query(() => ProductOutput)
  // @UseGuards(AzureAuthGuard)
  // async getProductByUpn(@Args('upn') upn: string) {
  //   return this.productsService.getProductByUpn(upn);
  // }
}
