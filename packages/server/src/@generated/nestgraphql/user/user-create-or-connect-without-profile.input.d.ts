import { Prisma } from '@prisma/client';

import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
export declare class UserCreateOrConnectWithoutProfileInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    create: UserCreateWithoutProfileInput;
}
