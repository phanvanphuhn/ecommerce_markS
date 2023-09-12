import { Prisma } from '@prisma/client';

import { ScheduleCreateWithoutCaseLogInput } from './schedule-create-without-case-log.input';
import { ScheduleCreateOrConnectWithoutCaseLogInput } from './schedule-create-or-connect-without-case-log.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
export declare class ScheduleCreateNestedOneWithoutCaseLogInput {
    create?: ScheduleCreateWithoutCaseLogInput;
    connectOrCreate?: ScheduleCreateOrConnectWithoutCaseLogInput;
    connect?: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
}
