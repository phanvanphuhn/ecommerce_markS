import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductsInvoiceRelationFilter } from '../products-invoice/products-invoice-relation-filter.input';

import { ProductWhereInput } from './product-where.input';
export declare class ProductWhereUniqueInput {
    name?: string;
    AND?: Array<ProductWhereInput>;
    OR?: Array<ProductWhereInput>;
    NOT?: Array<ProductWhereInput>;
    quantity?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    productsInvoiceId?: StringFilter;
    productsInvoice?: ProductsInvoiceRelationFilter;
}
