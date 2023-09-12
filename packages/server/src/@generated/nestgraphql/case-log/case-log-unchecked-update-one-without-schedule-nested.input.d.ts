import { CaseLogCreateWithoutScheduleInput } from './case-log-create-without-schedule.input';
import { CaseLogCreateOrConnectWithoutScheduleInput } from './case-log-create-or-connect-without-schedule.input';
import { CaseLogUpsertWithoutScheduleInput } from './case-log-upsert-without-schedule.input';
import { CaseLogWhereInput } from './case-log-where.input';
import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateToOneWithWhereWithoutScheduleInput } from './case-log-update-to-one-with-where-without-schedule.input';
export declare class CaseLogUncheckedUpdateOneWithoutScheduleNestedInput {
    create?: CaseLogCreateWithoutScheduleInput;
    connectOrCreate?: CaseLogCreateOrConnectWithoutScheduleInput;
    upsert?: CaseLogUpsertWithoutScheduleInput;
    disconnect?: CaseLogWhereInput;
    delete?: CaseLogWhereInput;
    connect?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    update?: CaseLogUpdateToOneWithWhereWithoutScheduleInput;
}
