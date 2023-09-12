import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class FindUniqueProductsInvoiceArgs {
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
