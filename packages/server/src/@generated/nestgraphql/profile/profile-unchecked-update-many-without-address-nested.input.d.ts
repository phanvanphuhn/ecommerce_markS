import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';
import { ProfileCreateOrConnectWithoutAddressInput } from './profile-create-or-connect-without-address.input';
import { ProfileUpsertWithWhereUniqueWithoutAddressInput } from './profile-upsert-with-where-unique-without-address.input';
import { ProfileCreateManyAddressInputEnvelope } from './profile-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutAddressInput } from './profile-update-with-where-unique-without-address.input';
import { ProfileUpdateManyWithWhereWithoutAddressInput } from './profile-update-many-with-where-without-address.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';
export declare class ProfileUncheckedUpdateManyWithoutAddressNestedInput {
    create?: Array<ProfileCreateWithoutAddressInput>;
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutAddressInput>;
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutAddressInput>;
    createMany?: ProfileCreateManyAddressInputEnvelope;
    set?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;
    disconnect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;
    delete?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;
    connect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;
    update?: Array<ProfileUpdateWithWhereUniqueWithoutAddressInput>;
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutAddressInput>;
    deleteMany?: Array<ProfileScalarWhereInput>;
}
