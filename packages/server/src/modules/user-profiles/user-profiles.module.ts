import { Module } from '@nestjs/common';

import { UserProfilesService } from './user-profiles.service';
import { UserProfilesResolver } from './user-profiles.resolver';

@Module({
  providers: [UserProfilesResolver, UserProfilesService]
})
export class UserProfilesModule {}
