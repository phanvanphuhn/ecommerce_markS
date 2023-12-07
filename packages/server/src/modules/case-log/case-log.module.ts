import { Module } from '@nestjs/common';

import { S3Module } from '../_aws/s3.module';

import { CaseLogService } from './case-log.service';
import { CaseLogResolver } from './case-log.resolver';

@Module({
  imports: [S3Module],
  providers: [CaseLogService, CaseLogResolver],
})
export class CaseLogModule {}
