import { ScheduleCreateWithoutCaseLogInput } from './schedule-create-without-case-log.input';
import { ScheduleCreateOrConnectWithoutCaseLogInput } from './schedule-create-or-connect-without-case-log.input';
import { ScheduleUpsertWithoutCaseLogInput } from './schedule-upsert-without-case-log.input';
import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateToOneWithWhereWithoutCaseLogInput } from './schedule-update-to-one-with-where-without-case-log.input';
export declare class ScheduleUpdateOneRequiredWithoutCaseLogNestedInput {
    create?: ScheduleCreateWithoutCaseLogInput;
    connectOrCreate?: ScheduleCreateOrConnectWithoutCaseLogInput;
    upsert?: ScheduleUpsertWithoutCaseLogInput;
    connect?: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    update?: ScheduleUpdateToOneWithWhereWithoutCaseLogInput;
}
