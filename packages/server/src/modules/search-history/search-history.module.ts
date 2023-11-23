import { Module } from '@nestjs/common';

import { SearchHistoryResolver } from './search-history.resolver';
import { SearchHistoryService } from './search-history.service';

@Module({
  providers: [SearchHistoryResolver, SearchHistoryService],
  exports: [],
})
export class SearchHistoryModule {}
