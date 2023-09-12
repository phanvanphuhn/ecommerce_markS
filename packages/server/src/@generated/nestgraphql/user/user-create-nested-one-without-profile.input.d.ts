import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutProfileInput {
    create?: UserCreateWithoutProfileInput;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
}
