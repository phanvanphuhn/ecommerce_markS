import { Prisma } from '@prisma/client';

import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutUserInput } from './schedule-update-without-user.input';
import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';
export declare class ScheduleUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    update: ScheduleUpdateWithoutUserInput;
    create: ScheduleCreateWithoutUserInput;
}
