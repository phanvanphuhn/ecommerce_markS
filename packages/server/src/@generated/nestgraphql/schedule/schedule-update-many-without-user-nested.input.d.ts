import { Prisma } from '@prisma/client';

import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';
import { ScheduleCreateOrConnectWithoutUserInput } from './schedule-create-or-connect-without-user.input';
import { ScheduleUpsertWithWhereUniqueWithoutUserInput } from './schedule-upsert-with-where-unique-without-user.input';
import { ScheduleCreateManyUserInputEnvelope } from './schedule-create-many-user-input-envelope.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithWhereUniqueWithoutUserInput } from './schedule-update-with-where-unique-without-user.input';
import { ScheduleUpdateManyWithWhereWithoutUserInput } from './schedule-update-many-with-where-without-user.input';
import { ScheduleScalarWhereInput } from './schedule-scalar-where.input';
export declare class ScheduleUpdateManyWithoutUserNestedInput {
    create?: Array<ScheduleCreateWithoutUserInput>;
    connectOrCreate?: Array<ScheduleCreateOrConnectWithoutUserInput>;
    upsert?: Array<ScheduleUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: ScheduleCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>>;
    update?: Array<ScheduleUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<ScheduleUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<ScheduleScalarWhereInput>;
}
