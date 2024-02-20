import { Inject, Module, forwardRef } from '@nestjs/common';

import { S3Module } from '../_aws/s3.module';
import { UserProfilesModule } from '../user-profiles/user-profiles.module';
import { ProductsModule } from '../products/products.module';

import { CaseLogService } from './case-log.service';
import { CaseLogResolver } from './case-log.resolver';
import { CaseLogSubmissionsResolver } from './case-log-submissions.resolver';
import { CaseLogSubmissionsService } from './case-log-submissions.service';

@Module({
  imports: [ProductsModule, S3Module, UserProfilesModule],
  providers: [
    CaseLogService,
    CaseLogResolver,
    CaseLogSubmissionsResolver,
    CaseLogSubmissionsService,
  ],
  exports: [CaseLogSubmissionsService, CaseLogService],
})
export class CaseLogModule {}
