import { Module } from '@nestjs/common';

import { UserProfilesModule } from '../user-profiles/user-profiles.module';

import { ComplaintsResolver } from './complaints.resolver';
import { ComplaintsService } from './complaints.service';

@Module({
  imports: [UserProfilesModule],
  providers: [ComplaintsResolver, ComplaintsService],
  exports: [],
})
export class ComplaintsModule {}
