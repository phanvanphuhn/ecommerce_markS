import { Prisma } from '@prisma/client';

import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceCreateWithoutProductsInput } from './products-invoice-create-without-products.input';
export declare class ProductsInvoiceCreateOrConnectWithoutProductsInput {
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    create: ProductsInvoiceCreateWithoutProductsInput;
}
