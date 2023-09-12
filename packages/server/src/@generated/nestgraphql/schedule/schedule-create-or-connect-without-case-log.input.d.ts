import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutCaseLogInput } from './schedule-create-without-case-log.input';
export declare class ScheduleCreateOrConnectWithoutCaseLogInput {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    create: ScheduleCreateWithoutCaseLogInput;
}
