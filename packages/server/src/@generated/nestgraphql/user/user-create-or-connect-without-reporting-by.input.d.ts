import { Prisma } from '@prisma/client';

import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReportingByInput } from './user-create-without-reporting-by.input';
export declare class UserCreateOrConnectWithoutReportingByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    create: UserCreateWithoutReportingByInput;
}
