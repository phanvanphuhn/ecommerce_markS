import { Prisma } from '@prisma/client';

import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';
export declare class ScheduleCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    create: ScheduleCreateWithoutUserInput;
}
