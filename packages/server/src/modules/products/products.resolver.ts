import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';


import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserEntity } from '../../common/decorators/user.decorator';
import { UserProfilesService } from '../user-profiles/user-profiles.service';
import { CaseLogSubmissionsService } from '../case-log/case-log-submissions.service';

import { ProductFilterArgs, ProductOutput } from './dto/products.dto';
import { ProductsService } from './products.service';

import { CaseLogSubmission } from '@generated/nestgraphql/case-log-submission/case-log-submission.model';
import { Products } from '@generated/nestgraphql/products/products.model';

@Resolver(() => Products)
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private caseLogSubmissionsService: CaseLogSubmissionsService,
    private userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [Products])
  @UseGuards(AzureAuthGuard)
  async getProducts(@UserEntity() userInfo, @Args() args: ProductFilterArgs) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    if (!user) {
      throw new Error('User not found');
    }

    const country = user
      .map((user) => user.country)
      .find((country) => country !== null);

    return this.productsService.getProducts(country, args);
  }

  @ResolveField('caseLogSubmission', () => [CaseLogSubmission])
  async getCaseLogSubmission(@Parent() product: Products) {
    return this.caseLogSubmissionsService.getCaseLogSubmissionsByProductId(
      product.id,
    );
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
