import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

@Injectable()
export class ComplaintsService {
  constructor(private database: Database) {}

  getComplaints() {
    return this.database.selectFrom('marks.Complaint').selectAll().execute();
  }

  getComplaint(id: number) {
    return this.database
      .selectFrom('marks.Complaint')
      .where('id', '=', id)
      .executeTakeFirst();
  }
}
