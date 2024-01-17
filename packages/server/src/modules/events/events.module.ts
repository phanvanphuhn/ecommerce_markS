import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { EventsResolver } from './events.resolver';
import { EventsService } from './events.service';

@Module({
  imports: [UserProfilesModule],
  providers: [EventsResolver, EventsService],
  exports: [],
})
export class EventsModule {}
