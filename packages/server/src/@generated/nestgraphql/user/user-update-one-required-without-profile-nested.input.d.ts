import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { UserUpsertWithoutProfileInput } from './user-upsert-without-profile.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProfileInput } from './user-update-to-one-with-where-without-profile.input';
export declare class UserUpdateOneRequiredWithoutProfileNestedInput {
    create?: UserCreateWithoutProfileInput;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    upsert?: UserUpsertWithoutProfileInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    update?: UserUpdateToOneWithWhereWithoutProfileInput;
}
