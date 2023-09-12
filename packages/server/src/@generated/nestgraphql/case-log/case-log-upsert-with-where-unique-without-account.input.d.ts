import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateWithoutAccountInput } from './case-log-update-without-account.input';
import { CaseLogCreateWithoutAccountInput } from './case-log-create-without-account.input';
export declare class CaseLogUpsertWithWhereUniqueWithoutAccountInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    update: CaseLogUpdateWithoutAccountInput;
    create: CaseLogCreateWithoutAccountInput;
}
