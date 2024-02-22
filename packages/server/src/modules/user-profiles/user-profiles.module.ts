import { Module } from '@nestjs/common';

import { LeaderboardModule } from '../leaderboard/leaderboard.module';

import { UserProfilesService } from './user-profiles.service';
import { UserProfilesResolver } from './user-profiles.resolver';

@Module({
  imports: [LeaderboardModule],
  providers: [UserProfilesResolver, UserProfilesService],
  exports: [UserProfilesService],
})
export class UserProfilesModule {}
