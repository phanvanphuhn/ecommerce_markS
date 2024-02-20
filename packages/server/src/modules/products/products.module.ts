import { Module, forwardRef } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';
import { CaseLogModule } from '../case-log/case-log.module';

import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [UserProfilesModule, forwardRef(() => CaseLogModule)],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService],
})
export class ProductsModule {}
