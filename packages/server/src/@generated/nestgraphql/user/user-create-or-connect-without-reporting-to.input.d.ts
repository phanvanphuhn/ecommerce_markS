import { Prisma } from '@prisma/client';

import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReportingToInput } from './user-create-without-reporting-to.input';
export declare class UserCreateOrConnectWithoutReportingToInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    create: UserCreateWithoutReportingToInput;
}
