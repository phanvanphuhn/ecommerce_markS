import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogCreateWithoutAccountInput } from './case-log-create-without-account.input';
export declare class CaseLogCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    create: CaseLogCreateWithoutAccountInput;
}
