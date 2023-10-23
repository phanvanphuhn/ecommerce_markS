import { Module } from '@nestjs/common';

import { LeaderboardResolver } from './leaderboard.resolver';
import { LeaderboardService } from './leaderboard.service';

@Module({
  providers: [LeaderboardResolver, LeaderboardService],
  exports: [],
})
export class LeaderboardModule {}
