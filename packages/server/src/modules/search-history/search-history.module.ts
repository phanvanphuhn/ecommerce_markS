import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { SearchHistoryResolver } from './search-history.resolver';
import { SearchHistoryService } from './search-history.service';

@Module({
  imports: [UserProfilesModule],
  providers: [SearchHistoryResolver, SearchHistoryService],
  exports: [],
})
export class SearchHistoryModule {}
