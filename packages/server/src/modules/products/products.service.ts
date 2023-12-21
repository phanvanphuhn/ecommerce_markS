import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

@Injectable()
export class ProductsService {
  constructor(private database: Database) {}

  async getProducts() {
    const query = this.database.selectFrom('marks.Products').selectAll();
    return await query.execute();
  }

  async getProductsByUserCountry(salesRepEmail: string) {
    const profile = await this.database
      .selectFrom('marks.UserProfile')
      .select(['country'])
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .executeTakeFirst();

    const query = this.database
      .selectFrom('marks.Products')
      .selectAll()
      .where('country', '=', profile.country);

    return await query.execute();
  }

  async getProductByUpn(upn: string) {
    const query = this.database
      .selectFrom('marks.Products')
      .selectAll()
      .where('upn', '=', upn);

    return await query.executeTakeFirst();
  }
}
