import { Prisma } from '@prisma/client';

import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateWithoutAccountInput } from './case-log-update-without-account.input';
export declare class CaseLogUpdateWithWhereUniqueWithoutAccountInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    data: CaseLogUpdateWithoutAccountInput;
}
