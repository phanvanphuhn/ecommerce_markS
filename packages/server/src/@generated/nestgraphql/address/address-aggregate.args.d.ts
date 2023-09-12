import { Prisma } from '@prisma/client';

import { AddressWhereInput } from './address-where.input';
import { AddressOrderByWithRelationInput } from './address-order-by-with-relation.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCountAggregateInput } from './address-count-aggregate.input';
import { AddressAvgAggregateInput } from './address-avg-aggregate.input';
import { AddressSumAggregateInput } from './address-sum-aggregate.input';
import { AddressMinAggregateInput } from './address-min-aggregate.input';
import { AddressMaxAggregateInput } from './address-max-aggregate.input';
export declare class AddressAggregateArgs {
    where?: AddressWhereInput;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInput;
    _avg?: AddressAvgAggregateInput;
    _sum?: AddressSumAggregateInput;
    _min?: AddressMinAggregateInput;
    _max?: AddressMaxAggregateInput;
}
