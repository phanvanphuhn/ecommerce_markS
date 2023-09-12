import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateWithoutProfilesInput } from './address-create-without-profiles.input';
export declare class AddressCreateOrConnectWithoutProfilesInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: AddressCreateWithoutProfilesInput;
}
