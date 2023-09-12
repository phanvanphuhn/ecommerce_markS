import { Prisma } from '@prisma/client';

import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';
export declare class ProfileCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    create: ProfileCreateWithoutAddressInput;
}
