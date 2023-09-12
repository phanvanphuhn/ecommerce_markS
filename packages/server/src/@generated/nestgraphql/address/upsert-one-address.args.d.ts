import { Prisma } from '@prisma/client';

import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateInput } from './address-create.input';
import { AddressUpdateInput } from './address-update.input';
export declare class UpsertOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: AddressCreateInput;
    update: AddressUpdateInput;
}
