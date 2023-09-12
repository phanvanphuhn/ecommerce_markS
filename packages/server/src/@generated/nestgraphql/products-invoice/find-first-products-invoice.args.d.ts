import { Prisma } from '@prisma/client';

import { ProductsInvoiceWhereInput } from './products-invoice-where.input';
import { ProductsInvoiceOrderByWithRelationInput } from './products-invoice-order-by-with-relation.input';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceScalarFieldEnum } from './products-invoice-scalar-field.enum';
export declare class FindFirstProductsInvoiceArgs {
    where?: ProductsInvoiceWhereInput;
    orderBy?: Array<ProductsInvoiceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductsInvoiceScalarFieldEnum>;
}
