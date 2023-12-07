import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';
import { S3Service } from '../_aws/s3.service';
import { FileUpload } from '../../common/types/file-upload';

import { CaseLogInput } from './dto/case-log.dto';

@Injectable()
export class CaseLogService {
  constructor(private database: Database, private s3Service: S3Service) {}

  async testGetFile(filePath: string) {
    return (await this.s3Service.getBlob(filePath)).Body;
  }

  async testUploadFile(input: CaseLogInput) {
    for (const photo of input.files) {
      const file = await photo;
      const test = await this.s3Service.putStream('test', file);
      console.log(test);
    }
    return 'createCaseLog';
  }
}
