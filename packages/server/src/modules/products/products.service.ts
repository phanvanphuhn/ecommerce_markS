import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

import { ProductFilterArgs, ProductOutput } from './dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(private database: Database) {}

  async getProducts(country: string, filter: ProductFilterArgs) {
    let query = this.database
      .selectFrom('marks.Products')
      .where('country', 'like', country)
      .selectAll();

    if (filter.take) {
      query = query.limit(filter.take);
    }

    if (filter.skip) {
      query = query.offset(filter.skip);
    }

    if (filter.gtin) {
      query = query.where('gtin', 'ilike', `%${filter.gtin}%`);
    }

    if (filter.upn) {
      query = query.where('upn', 'ilike', `%${filter.upn}%`);
    }

    if (filter.createdAt) {
      query = query.where('createdAt', '>=', filter.createdAt);
    }

    if (filter.updatedAt) {
      query = query.where('updatedAt', '<=', filter.updatedAt);
    }

    if (filter.upnDescription) {
      query = query.where(
        'upnDescription',
        'ilike',
        `%${filter.upnDescription}%`,
      );
    }

    const products = await query.execute();

    return products.map((product) => new ProductOutput(product));
  }

  async getProductById(id: string) {
    const query = this.database
      .selectFrom('marks.Products')
      .selectAll()
      .where('id', '=', id);

    return await query.executeTakeFirst();
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
