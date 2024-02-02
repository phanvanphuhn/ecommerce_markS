import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Inject, forwardRef } from '@nestjs/common';


import { ProductsService } from '../products/products.service';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { CaseLogService } from './case-log.service';
import { CaseLogOutput } from './dto/case-log.dto';

import { Products } from '@generated/nestgraphql/products/products.model';
import { CaseLogSubmission } from '@generated/nestgraphql/case-log-submission/case-log-submission.model';

@Resolver(() => CaseLogSubmission)
export class CaseLogSubmissionsResolver {
  constructor(
    private caseLogService: CaseLogService,
    @Inject(forwardRef(() => ProductsService))
    private productsService: ProductsService,
    private userProfileService: UserProfilesService,
  ) {}

  @ResolveField('caseLog', () => CaseLogOutput)
  async getCaseLog(@Parent() caseLogSubmission: CaseLogSubmission) {
    return this.caseLogService.getCaseLog(
      caseLogSubmission.salesRepEmail,
      caseLogSubmission.caseLogId,
    );
  }

  @ResolveField('product', () => Products)
  async getProduct(@Parent() caseLogSubmission: CaseLogSubmission) {
    return this.productsService.getProductById(caseLogSubmission.productId);
  }
}
