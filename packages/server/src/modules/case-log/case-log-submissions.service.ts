import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

@Injectable()
export class CaseLogSubmissionsService {
  constructor(private database: Database) {}

  async getCaseLogSubmissionsByProductId(productId: string) {
    const query = this.database
      .selectFrom('marks.CaseLogSubmission')
      .selectAll()
      .where('productId', '=', productId);

    return await query.execute();
  }
}
