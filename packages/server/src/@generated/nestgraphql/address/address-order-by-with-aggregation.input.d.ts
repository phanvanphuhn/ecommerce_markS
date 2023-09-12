import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

import { AddressCountOrderByAggregateInput } from './address-count-order-by-aggregate.input';
import { AddressAvgOrderByAggregateInput } from './address-avg-order-by-aggregate.input';
import { AddressMaxOrderByAggregateInput } from './address-max-order-by-aggregate.input';
import { AddressMinOrderByAggregateInput } from './address-min-order-by-aggregate.input';
import { AddressSumOrderByAggregateInput } from './address-sum-order-by-aggregate.input';
export declare class AddressOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    street?: SortOrderInput;
    city?: SortOrderInput;
    state?: SortOrderInput;
    zip?: SortOrderInput;
    country?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: AddressCountOrderByAggregateInput;
    _avg?: AddressAvgOrderByAggregateInput;
    _max?: AddressMaxOrderByAggregateInput;
    _min?: AddressMinOrderByAggregateInput;
    _sum?: AddressSumOrderByAggregateInput;
}
