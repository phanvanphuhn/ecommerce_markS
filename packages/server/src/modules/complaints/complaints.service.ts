import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

@Injectable()
export class ComplaintsService {
  constructor(private database: Database) {}

  getComplaints(salesRepEmail: string) {
    return this.database
      .selectFrom('marks.Complaint')
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .selectAll()
      .execute();
  }

  getComplaint(id: string) {
    return this.database
      .selectFrom('marks.Complaint')
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirst();
  }
}
