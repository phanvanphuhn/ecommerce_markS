import { Prisma } from '@prisma/client';

import { CaseLogCreateWithoutProductsInvoiceInput } from './case-log-create-without-products-invoice.input';
import { CaseLogCreateOrConnectWithoutProductsInvoiceInput } from './case-log-create-or-connect-without-products-invoice.input';
import { CaseLogUpsertWithoutProductsInvoiceInput } from './case-log-upsert-without-products-invoice.input';
import { CaseLogWhereInput } from './case-log-where.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateToOneWithWhereWithoutProductsInvoiceInput } from './case-log-update-to-one-with-where-without-products-invoice.input';
export declare class CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput {
    create?: CaseLogCreateWithoutProductsInvoiceInput;
    connectOrCreate?: CaseLogCreateOrConnectWithoutProductsInvoiceInput;
    upsert?: CaseLogUpsertWithoutProductsInvoiceInput;
    disconnect?: CaseLogWhereInput;
    delete?: CaseLogWhereInput;
    connect?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    update?: CaseLogUpdateToOneWithWhereWithoutProductsInvoiceInput;
}
