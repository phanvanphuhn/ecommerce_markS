import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class DeleteOneCaseLogArgs {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
}
