import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutPlanCallInput } from './schedule-create-without-plan-call.input';
export declare class ScheduleCreateOrConnectWithoutPlanCallInput {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    create: ScheduleCreateWithoutPlanCallInput;
}
