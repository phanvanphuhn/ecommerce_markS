import { Prisma } from '@prisma/client';

import { ProductsInvoiceCreateWithoutCaseLogInput } from './products-invoice-create-without-case-log.input';
import { ProductsInvoiceCreateOrConnectWithoutCaseLogInput } from './products-invoice-create-or-connect-without-case-log.input';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class ProductsInvoiceCreateNestedOneWithoutCaseLogInput {
    create?: ProductsInvoiceCreateWithoutCaseLogInput;
    connectOrCreate?: ProductsInvoiceCreateOrConnectWithoutCaseLogInput;
    connect?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
