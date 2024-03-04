import { Module, forwardRef } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { LeaderboardResolver } from './leaderboard.resolver';
import { LeaderboardService } from './leaderboard.service';

@Module({
  imports: [forwardRef(() =>UserProfilesModule)],
  providers: [LeaderboardResolver, LeaderboardService],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}
