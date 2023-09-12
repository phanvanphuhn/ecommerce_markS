import { Prisma } from '@prisma/client';

import { AddressWhereUniqueInput } from './address-where-unique.input';
export declare class FindUniqueAddressOrThrowArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
