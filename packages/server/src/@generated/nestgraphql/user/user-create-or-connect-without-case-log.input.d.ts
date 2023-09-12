import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCaseLogInput } from './user-create-without-case-log.input';
export declare class UserCreateOrConnectWithoutCaseLogInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    create: UserCreateWithoutCaseLogInput;
}
