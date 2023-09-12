import { Prisma } from '@prisma/client';

import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogCreateWithoutProductsInvoiceInput } from './case-log-create-without-products-invoice.input';
export declare class CaseLogCreateOrConnectWithoutProductsInvoiceInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    create: CaseLogCreateWithoutProductsInvoiceInput;
}
