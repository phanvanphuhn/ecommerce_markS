import { AddressWhereInput } from './address-where.input';
import { AddressOrderByWithAggregationInput } from './address-order-by-with-aggregation.input';
import { AddressScalarFieldEnum } from './address-scalar-field.enum';
import { AddressScalarWhereWithAggregatesInput } from './address-scalar-where-with-aggregates.input';
import { AddressCountAggregateInput } from './address-count-aggregate.input';
import { AddressAvgAggregateInput } from './address-avg-aggregate.input';
import { AddressSumAggregateInput } from './address-sum-aggregate.input';
import { AddressMinAggregateInput } from './address-min-aggregate.input';
import { AddressMaxAggregateInput } from './address-max-aggregate.input';
export declare class AddressGroupByArgs {
    where?: AddressWhereInput;
    orderBy?: Array<AddressOrderByWithAggregationInput>;
    by: Array<keyof typeof AddressScalarFieldEnum>;
    having?: AddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInput;
    _avg?: AddressAvgAggregateInput;
    _sum?: AddressSumAggregateInput;
    _min?: AddressMinAggregateInput;
    _max?: AddressMaxAggregateInput;
}
