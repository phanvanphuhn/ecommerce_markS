import { Prisma } from '@prisma/client';

import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutUserInput } from './schedule-update-without-user.input';
export declare class ScheduleUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    data: ScheduleUpdateWithoutUserInput;
}
