import { UserCreateWithoutCaseLogInput } from './user-create-without-case-log.input';
import { UserCreateOrConnectWithoutCaseLogInput } from './user-create-or-connect-without-case-log.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutCaseLogInput {
    create?: UserCreateWithoutCaseLogInput;
    connectOrCreate?: UserCreateOrConnectWithoutCaseLogInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
}
