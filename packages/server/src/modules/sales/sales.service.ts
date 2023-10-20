import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

@Injectable()
export class SalesService {
  constructor(private readonly database: Database) {}
}