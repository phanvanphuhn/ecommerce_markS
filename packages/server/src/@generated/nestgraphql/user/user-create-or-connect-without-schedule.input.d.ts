import { Prisma } from '@prisma/client';

import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutScheduleInput } from './user-create-without-schedule.input';
export declare class UserCreateOrConnectWithoutScheduleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    create: UserCreateWithoutScheduleInput;
}
