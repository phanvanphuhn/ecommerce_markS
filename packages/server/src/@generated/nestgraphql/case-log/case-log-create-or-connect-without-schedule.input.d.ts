import { Prisma } from '@prisma/client';

import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogCreateWithoutScheduleInput } from './case-log-create-without-schedule.input';
export declare class CaseLogCreateOrConnectWithoutScheduleInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    create: CaseLogCreateWithoutScheduleInput;
}
