import { ProductsInvoiceUpdateInput } from './products-invoice-update.input';
import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class UpdateOneProductsInvoiceArgs {
    data: ProductsInvoiceUpdateInput;
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
