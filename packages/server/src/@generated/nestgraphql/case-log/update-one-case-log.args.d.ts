import { CaseLogUpdateInput } from './case-log-update.input';
import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class UpdateOneCaseLogArgs {
    data: CaseLogUpdateInput;
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
}
