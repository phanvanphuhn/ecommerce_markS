import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
export declare class DeleteOneScheduleArgs {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
}
