import { Prisma } from '@prisma/client';

import { CaseLogCreateWithoutProductsInvoiceInput } from './case-log-create-without-products-invoice.input';
import { CaseLogCreateOrConnectWithoutProductsInvoiceInput } from './case-log-create-or-connect-without-products-invoice.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class CaseLogUncheckedCreateNestedOneWithoutProductsInvoiceInput {
    create?: CaseLogCreateWithoutProductsInvoiceInput;
    connectOrCreate?: CaseLogCreateOrConnectWithoutProductsInvoiceInput;
    connect?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
}
