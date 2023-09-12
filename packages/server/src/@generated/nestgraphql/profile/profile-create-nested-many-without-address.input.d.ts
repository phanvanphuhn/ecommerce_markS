import { Prisma } from '@prisma/client';

import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';
import { ProfileCreateOrConnectWithoutAddressInput } from './profile-create-or-connect-without-address.input';
import { ProfileCreateManyAddressInputEnvelope } from './profile-create-many-address-input-envelope.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
export declare class ProfileCreateNestedManyWithoutAddressInput {
    create?: Array<ProfileCreateWithoutAddressInput>;
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutAddressInput>;
    createMany?: ProfileCreateManyAddressInputEnvelope;
    connect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;
}
