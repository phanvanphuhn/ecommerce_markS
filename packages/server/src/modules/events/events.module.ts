import { Module } from '@nestjs/common';

import { EventsResolver } from './events.resolver';
import { EventsService } from './events.service';

@Module({
  imports: [],
  providers: [EventsResolver, EventsService],
  exports: [],
})
export class EventsModule {}
