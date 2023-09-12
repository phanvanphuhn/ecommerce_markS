import { Prisma } from '@prisma/client';

import { UserCreateWithoutReportingByInput } from './user-create-without-reporting-by.input';
import { UserCreateOrConnectWithoutReportingByInput } from './user-create-or-connect-without-reporting-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutReportingByInput {
    create?: UserCreateWithoutReportingByInput;
    connectOrCreate?: UserCreateOrConnectWithoutReportingByInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
}
