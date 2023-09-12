import { Prisma } from '@prisma/client';

import { AddressCreateWithoutProfilesInput } from './address-create-without-profiles.input';
import { AddressCreateOrConnectWithoutProfilesInput } from './address-create-or-connect-without-profiles.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';
export declare class AddressCreateNestedOneWithoutProfilesInput {
    create?: AddressCreateWithoutProfilesInput;
    connectOrCreate?: AddressCreateOrConnectWithoutProfilesInput;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
