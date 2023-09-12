import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class DeleteOneProductsInvoiceArgs {
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
