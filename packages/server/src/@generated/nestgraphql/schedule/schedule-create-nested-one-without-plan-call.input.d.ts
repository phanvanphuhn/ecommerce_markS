import { Prisma } from '@prisma/client';

import { ScheduleCreateWithoutPlanCallInput } from './schedule-create-without-plan-call.input';
import { ScheduleCreateOrConnectWithoutPlanCallInput } from './schedule-create-or-connect-without-plan-call.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
export declare class ScheduleCreateNestedOneWithoutPlanCallInput {
    create?: ScheduleCreateWithoutPlanCallInput;
    connectOrCreate?: ScheduleCreateOrConnectWithoutPlanCallInput;
    connect?: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
}
