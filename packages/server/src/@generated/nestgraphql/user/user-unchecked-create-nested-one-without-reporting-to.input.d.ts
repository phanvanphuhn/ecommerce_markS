import { Prisma } from '@prisma/client';

import { UserCreateWithoutReportingToInput } from './user-create-without-reporting-to.input';
import { UserCreateOrConnectWithoutReportingToInput } from './user-create-or-connect-without-reporting-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserUncheckedCreateNestedOneWithoutReportingToInput {
    create?: UserCreateWithoutReportingToInput;
    connectOrCreate?: UserCreateOrConnectWithoutReportingToInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
}
