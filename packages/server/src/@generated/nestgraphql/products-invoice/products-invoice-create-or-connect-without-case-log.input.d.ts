import { Prisma } from '@prisma/client';

import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceCreateWithoutCaseLogInput } from './products-invoice-create-without-case-log.input';
export declare class ProductsInvoiceCreateOrConnectWithoutCaseLogInput {
    where: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    create: ProductsInvoiceCreateWithoutCaseLogInput;
}
