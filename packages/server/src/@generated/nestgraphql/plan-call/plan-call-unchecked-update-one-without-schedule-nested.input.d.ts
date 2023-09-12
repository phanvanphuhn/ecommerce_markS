import { Prisma } from '@prisma/client';

import { PlanCallCreateWithoutScheduleInput } from './plan-call-create-without-schedule.input';
import { PlanCallCreateOrConnectWithoutScheduleInput } from './plan-call-create-or-connect-without-schedule.input';
import { PlanCallUpsertWithoutScheduleInput } from './plan-call-upsert-without-schedule.input';
import { PlanCallWhereInput } from './plan-call-where.input';
import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
import { PlanCallUpdateToOneWithWhereWithoutScheduleInput } from './plan-call-update-to-one-with-where-without-schedule.input';
export declare class PlanCallUncheckedUpdateOneWithoutScheduleNestedInput {
    create?: PlanCallCreateWithoutScheduleInput;
    connectOrCreate?: PlanCallCreateOrConnectWithoutScheduleInput;
    upsert?: PlanCallUpsertWithoutScheduleInput;
    disconnect?: PlanCallWhereInput;
    delete?: PlanCallWhereInput;
    connect?: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
    update?: PlanCallUpdateToOneWithWhereWithoutScheduleInput;
}
