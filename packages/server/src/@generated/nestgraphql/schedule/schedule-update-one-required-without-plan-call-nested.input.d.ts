import { ScheduleCreateWithoutPlanCallInput } from './schedule-create-without-plan-call.input';
import { ScheduleCreateOrConnectWithoutPlanCallInput } from './schedule-create-or-connect-without-plan-call.input';
import { ScheduleUpsertWithoutPlanCallInput } from './schedule-upsert-without-plan-call.input';
import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateToOneWithWhereWithoutPlanCallInput } from './schedule-update-to-one-with-where-without-plan-call.input';
export declare class ScheduleUpdateOneRequiredWithoutPlanCallNestedInput {
    create?: ScheduleCreateWithoutPlanCallInput;
    connectOrCreate?: ScheduleCreateOrConnectWithoutPlanCallInput;
    upsert?: ScheduleUpsertWithoutPlanCallInput;
    connect?: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    update?: ScheduleUpdateToOneWithWhereWithoutPlanCallInput;
}
