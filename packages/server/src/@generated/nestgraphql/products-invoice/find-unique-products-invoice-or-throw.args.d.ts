import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class FindUniqueProductsInvoiceOrThrowArgs {
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
