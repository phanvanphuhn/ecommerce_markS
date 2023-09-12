import { UserCreateWithoutScheduleInput } from './user-create-without-schedule.input';
import { UserCreateOrConnectWithoutScheduleInput } from './user-create-or-connect-without-schedule.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutScheduleInput {
    create?: UserCreateWithoutScheduleInput;
    connectOrCreate?: UserCreateOrConnectWithoutScheduleInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
}
