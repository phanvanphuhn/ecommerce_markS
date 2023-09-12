import { Prisma } from '@prisma/client';

import { UserCreateWithoutReportingByInput } from './user-create-without-reporting-by.input';
import { UserCreateOrConnectWithoutReportingByInput } from './user-create-or-connect-without-reporting-by.input';
import { UserUpsertWithoutReportingByInput } from './user-upsert-without-reporting-by.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReportingByInput } from './user-update-to-one-with-where-without-reporting-by.input';
export declare class UserUpdateOneWithoutReportingByNestedInput {
    create?: UserCreateWithoutReportingByInput;
    connectOrCreate?: UserCreateOrConnectWithoutReportingByInput;
    upsert?: UserUpsertWithoutReportingByInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    update?: UserUpdateToOneWithWhereWithoutReportingByInput;
}
