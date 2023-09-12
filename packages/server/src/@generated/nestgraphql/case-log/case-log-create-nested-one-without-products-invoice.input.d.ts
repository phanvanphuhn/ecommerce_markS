import { CaseLogCreateWithoutProductsInvoiceInput } from './case-log-create-without-products-invoice.input';
import { CaseLogCreateOrConnectWithoutProductsInvoiceInput } from './case-log-create-or-connect-without-products-invoice.input';
import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class CaseLogCreateNestedOneWithoutProductsInvoiceInput {
    create?: CaseLogCreateWithoutProductsInvoiceInput;
    connectOrCreate?: CaseLogCreateOrConnectWithoutProductsInvoiceInput;
    connect?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
}
