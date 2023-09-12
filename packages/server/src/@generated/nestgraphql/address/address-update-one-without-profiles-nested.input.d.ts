import { AddressCreateWithoutProfilesInput } from './address-create-without-profiles.input';
import { AddressCreateOrConnectWithoutProfilesInput } from './address-create-or-connect-without-profiles.input';
import { AddressUpsertWithoutProfilesInput } from './address-upsert-without-profiles.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutProfilesInput } from './address-update-to-one-with-where-without-profiles.input';
export declare class AddressUpdateOneWithoutProfilesNestedInput {
    create?: AddressCreateWithoutProfilesInput;
    connectOrCreate?: AddressCreateOrConnectWithoutProfilesInput;
    upsert?: AddressUpsertWithoutProfilesInput;
    disconnect?: AddressWhereInput;
    delete?: AddressWhereInput;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: AddressUpdateToOneWithWhereWithoutProfilesInput;
}
