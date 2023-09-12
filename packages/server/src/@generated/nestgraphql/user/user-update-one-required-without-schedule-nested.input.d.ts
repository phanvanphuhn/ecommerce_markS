import { Prisma } from '@prisma/client';

import { UserCreateWithoutScheduleInput } from './user-create-without-schedule.input';
import { UserCreateOrConnectWithoutScheduleInput } from './user-create-or-connect-without-schedule.input';
import { UserUpsertWithoutScheduleInput } from './user-upsert-without-schedule.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutScheduleInput } from './user-update-to-one-with-where-without-schedule.input';
export declare class UserUpdateOneRequiredWithoutScheduleNestedInput {
    create?: UserCreateWithoutScheduleInput;
    connectOrCreate?: UserCreateOrConnectWithoutScheduleInput;
    upsert?: UserUpsertWithoutScheduleInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    update?: UserUpdateToOneWithWhereWithoutScheduleInput;
}
