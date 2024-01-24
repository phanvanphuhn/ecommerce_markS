import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';
import { S3Service } from '../_aws/s3.service';
import { FileUpload } from '../../common/types/file-upload';

import {
  CaseLogFilterArgs,
  CaseLogInput,
  CaseLogOutput,
} from './dto/case-log.dto';
import { CaseLogStatus } from './types/case-log.types';

@Injectable()
export class CaseLogService {
  constructor(private database: Database, private s3Service: S3Service) {}

  async getFile(filePath: string) {
    return (await this.s3Service.getBlob(filePath)).Body;
  }

  async getCaseLogs(salesRepEmail: string, filter: CaseLogFilterArgs) {
    let query = this.database.selectFrom('marks.CaseLog').selectAll();

    if (filter.account) {
      query = query.where('account', 'ilike', `%${filter.account}%`);
    }

    if (filter.contact) {
      query = query.where('contact', 'ilike', `%${filter.contact}%`);
    }

    if (filter.secondaryContact) {
      query = query.where(
        'secondaryContact',
        'ilike',
        `%${filter.secondaryContact}%`,
      );
    }

    if (filter.caseName) {
      query = query.where('caseName', 'ilike', `%${filter.caseName}%`);
    }

    if (filter.location) {
      query = query.where('location', 'ilike', `%${filter.location}%`);
    }

    if (filter.status) {
      query = query.where('status', 'ilike', filter.status);
    }

    if (filter.startDate) {
      query = query.where('startDate', '>=', filter.startDate);
    }

    if (filter.endDate) {
      query = query.where('endDate', '<=', filter.endDate);
    }

    if (filter.productIds) {
      query = query.where('productIds', 'in', filter.productIds);
    }

    query = query.where('activityOwnerEmail', '=', salesRepEmail);

    const result = await query.execute();

    return result;
  }

  async getCaseLog(salesRepEmail: string, id: string) {
    const result = await this.database
      .selectFrom('marks.CaseLog')
      .selectAll()
      .where('id', '=', id)
      .where('activityOwnerEmail', '=', salesRepEmail)
      .executeTakeFirst();

    return new CaseLogOutput(result);
  }

  async upsertCaseLog(salesRepEmail: string, input: CaseLogInput) {
    if (input.files) {
      for (const file of input.files) {
        const photo = await file;
        console.log('uploaded file', photo, 'for sales rep', salesRepEmail);

        await this.s3Service.putStream(salesRepEmail, photo);

        if (!input.photoPaths) {
          input.photoPaths = [];
        }

        input.photoPaths.push(
          photo?.filename || (file as unknown as FileUpload)?.filename || '',
        );
      }
    }

    const result = await this.database
      .insertInto('marks.CaseLog')
      .values({
        ...input,
        activityOwnerEmail: salesRepEmail,
        status: CaseLogStatus[input.status] || CaseLogStatus.IN_PROGRESS,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          ...input,
          updatedAt: new Date(),
          activityOwnerEmail: salesRepEmail,
          status: CaseLogStatus[input.status] || CaseLogStatus.IN_PROGRESS,
        }),
      )
      .returningAll()
      .executeTakeFirst();

    return result;
  }
}
