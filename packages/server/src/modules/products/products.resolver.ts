import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserEntity } from '../../common/decorators/user.decorator';

import { ProductOutput } from './dto/products.dto';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => ProductOutput)
  @UseGuards(AzureAuthGuard)
  async getProducts() {
    return this.productsService.getProducts();
  }

  @Query(() => ProductOutput)
  @UseGuards(AzureAuthGuard)
  async getProductsByUserCountry(@UserEntity() userInfo) {
    return this.productsService.getProductsByUserCountry(userInfo.email);
  }

  @Query(() => ProductOutput)
  @UseGuards(AzureAuthGuard)
  async getProductByUpn(@Args('upn') upn: string) {
    return this.productsService.getProductByUpn(upn);
  }
}
