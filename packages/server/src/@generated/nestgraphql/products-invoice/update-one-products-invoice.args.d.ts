import { Prisma } from '@prisma/client';

import { ProductsInvoiceUpdateInput } from './products-invoice-update.input';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class UpdateOneProductsInvoiceArgs {
    data: ProductsInvoiceUpdateInput;
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
