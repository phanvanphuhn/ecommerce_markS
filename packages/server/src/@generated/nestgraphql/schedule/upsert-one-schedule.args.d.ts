import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateInput } from './schedule-create.input';
import { ScheduleUpdateInput } from './schedule-update.input';
export declare class UpsertOneScheduleArgs {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    create: ScheduleCreateInput;
    update: ScheduleUpdateInput;
}
