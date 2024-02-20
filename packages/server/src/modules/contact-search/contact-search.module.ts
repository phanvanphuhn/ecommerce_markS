import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { ContactSearchResolver } from './contact-search.resolver';
import { ContactSearchService } from './contach-search.service';

@Module({
  imports: [UserProfilesModule],
  providers: [ContactSearchResolver, ContactSearchService],
  exports: [],
})
export class ContactSearchModule {}
