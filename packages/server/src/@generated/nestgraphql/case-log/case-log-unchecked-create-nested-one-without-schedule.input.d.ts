import { Prisma } from '@prisma/client';

import { CaseLogCreateWithoutScheduleInput } from './case-log-create-without-schedule.input';
import { CaseLogCreateOrConnectWithoutScheduleInput } from './case-log-create-or-connect-without-schedule.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class CaseLogUncheckedCreateNestedOneWithoutScheduleInput {
    create?: CaseLogCreateWithoutScheduleInput;
    connectOrCreate?: CaseLogCreateOrConnectWithoutScheduleInput;
    connect?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
}
