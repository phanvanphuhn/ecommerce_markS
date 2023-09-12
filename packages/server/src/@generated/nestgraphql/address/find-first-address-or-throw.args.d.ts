import { AddressWhereInput } from './address-where.input';
import { AddressOrderByWithRelationInput } from './address-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressScalarFieldEnum } from './address-scalar-field.enum';
export declare class FindFirstAddressOrThrowArgs {
    where?: AddressWhereInput;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
