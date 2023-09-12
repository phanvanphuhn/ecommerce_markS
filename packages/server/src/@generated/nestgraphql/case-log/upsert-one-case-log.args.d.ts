import { Prisma } from '@prisma/client';

import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogCreateInput } from './case-log-create.input';
import { CaseLogUpdateInput } from './case-log-update.input';
export declare class UpsertOneCaseLogArgs {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    create: CaseLogCreateInput;
    update: CaseLogUpdateInput;
}
