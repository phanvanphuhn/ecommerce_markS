import { Prisma } from '@prisma/client';

import { PlanCallCreateWithoutScheduleInput } from './plan-call-create-without-schedule.input';
import { PlanCallCreateOrConnectWithoutScheduleInput } from './plan-call-create-or-connect-without-schedule.input';
import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
export declare class PlanCallUncheckedCreateNestedOneWithoutScheduleInput {
    create?: PlanCallCreateWithoutScheduleInput;
    connectOrCreate?: PlanCallCreateOrConnectWithoutScheduleInput;
    connect?: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
}
