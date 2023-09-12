import { Prisma } from '@prisma/client';

import { AddressWhereUniqueInput } from './address-where-unique.input';
export declare class FindUniqueAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
