import { UserCreateWithoutCaseLogInput } from './user-create-without-case-log.input';
import { UserCreateOrConnectWithoutCaseLogInput } from './user-create-or-connect-without-case-log.input';
import { UserUpsertWithoutCaseLogInput } from './user-upsert-without-case-log.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCaseLogInput } from './user-update-to-one-with-where-without-case-log.input';
export declare class UserUpdateOneRequiredWithoutCaseLogNestedInput {
    create?: UserCreateWithoutCaseLogInput;
    connectOrCreate?: UserCreateOrConnectWithoutCaseLogInput;
    upsert?: UserUpsertWithoutCaseLogInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    update?: UserUpdateToOneWithWhereWithoutCaseLogInput;
}
