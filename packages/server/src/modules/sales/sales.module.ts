import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { SalesResolver } from './sales.resolver';
import { SalesService } from './sales.service';

@Module({
  imports: [UserProfilesModule],
  providers: [SalesResolver, SalesService],
  exports: [],
})
export class SalesModule {}
