import { Prisma } from '@prisma/client';

import { ProductsInvoiceCreateWithoutCaseLogInput } from './products-invoice-create-without-case-log.input';
import { ProductsInvoiceCreateOrConnectWithoutCaseLogInput } from './products-invoice-create-or-connect-without-case-log.input';
import { ProductsInvoiceUpsertWithoutCaseLogInput } from './products-invoice-upsert-without-case-log.input';
import { ProductsInvoiceWhereInput } from './products-invoice-where.input';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceUpdateToOneWithWhereWithoutCaseLogInput } from './products-invoice-update-to-one-with-where-without-case-log.input';
export declare class ProductsInvoiceUpdateOneWithoutCaseLogNestedInput {
    create?: ProductsInvoiceCreateWithoutCaseLogInput;
    connectOrCreate?: ProductsInvoiceCreateOrConnectWithoutCaseLogInput;
    upsert?: ProductsInvoiceUpsertWithoutCaseLogInput;
    disconnect?: ProductsInvoiceWhereInput;
    delete?: ProductsInvoiceWhereInput;
    connect?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    update?: ProductsInvoiceUpdateToOneWithWhereWithoutCaseLogInput;
}
