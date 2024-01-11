import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  providers: [ProductsService, ProductsResolver],
  exports: [],
  imports: [UserProfilesModule],
})
export class ProductsModule {}
