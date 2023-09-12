import { Prisma } from '@prisma/client';

import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutAddressInput } from './profile-update-without-address.input';
export declare class ProfileUpdateWithWhereUniqueWithoutAddressInput {
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    data: ProfileUpdateWithoutAddressInput;
}
