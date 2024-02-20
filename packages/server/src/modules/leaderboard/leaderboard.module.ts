import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { LeaderboardResolver } from './leaderboard.resolver';
import { LeaderboardService } from './leaderboard.service';

@Module({
  imports: [UserProfilesModule],
  providers: [LeaderboardResolver, LeaderboardService],
  exports: [],
})
export class LeaderboardModule {}
