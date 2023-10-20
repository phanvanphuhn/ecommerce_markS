import { Module } from '@nestjs/common';

import { ComplaintsResolver } from './complaints.resolver';
import { ComplaintsService } from './complaints.service';

@Module({
  providers: [ComplaintsResolver, ComplaintsService],
  exports: [],
})
export class ComplaintsModule {}
