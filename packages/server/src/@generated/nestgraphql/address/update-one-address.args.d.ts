import { AddressUpdateInput } from './address-update.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
export declare class UpdateOneAddressArgs {
    data: AddressUpdateInput;
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
