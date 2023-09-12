import { Prisma } from '@prisma/client';

import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceCreateInput } from './products-invoice-create.input';
import { ProductsInvoiceUpdateInput } from './products-invoice-update.input';
export declare class UpsertOneProductsInvoiceArgs {
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    create: ProductsInvoiceCreateInput;
    update: ProductsInvoiceUpdateInput;
}
