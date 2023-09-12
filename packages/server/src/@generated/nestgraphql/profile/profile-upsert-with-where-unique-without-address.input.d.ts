import { Prisma } from '@prisma/client';

import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutAddressInput } from './profile-update-without-address.input';
import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';
export declare class ProfileUpsertWithWhereUniqueWithoutAddressInput {
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    update: ProfileUpdateWithoutAddressInput;
    create: ProfileCreateWithoutAddressInput;
}
