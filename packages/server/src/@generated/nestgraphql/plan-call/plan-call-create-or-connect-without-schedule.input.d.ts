import { Prisma } from '@prisma/client';

import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
import { PlanCallCreateWithoutScheduleInput } from './plan-call-create-without-schedule.input';
export declare class PlanCallCreateOrConnectWithoutScheduleInput {
    where: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
    create: PlanCallCreateWithoutScheduleInput;
}
