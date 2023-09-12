import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
export declare class DeleteOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
