import { Prisma } from '@prisma/client';

import { ScheduleUpdateInput } from './schedule-update.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
export declare class UpdateOneScheduleArgs {
    data: ScheduleUpdateInput;
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
}
