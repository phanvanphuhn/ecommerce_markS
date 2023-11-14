import { Module } from '@nestjs/common';

import { UserProfilesService } from './user-profiles.service';
import { UserProfilesResolver } from './user-profiles.resolver';

@Module({
  providers: [UserProfilesResolver, UserProfilesService],
  exports: [UserProfilesService],
})
export class UserProfilesModule {}
