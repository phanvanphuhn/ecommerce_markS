import { Prisma } from '@prisma/client';

import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';
import { ScheduleCreateOrConnectWithoutUserInput } from './schedule-create-or-connect-without-user.input';
import { ScheduleCreateManyUserInputEnvelope } from './schedule-create-many-user-input-envelope.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
export declare class ScheduleUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<ScheduleCreateWithoutUserInput>;
    connectOrCreate?: Array<ScheduleCreateOrConnectWithoutUserInput>;
    createMany?: ScheduleCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>>;
}
