import { Prisma } from '@prisma/client';

import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
export declare class FindUniqueScheduleOrThrowArgs {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
}
