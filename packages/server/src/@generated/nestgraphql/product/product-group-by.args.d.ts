import { ProductWhereInput } from './product-where.input';
import { ProductOrderByWithAggregationInput } from './product-order-by-with-aggregation.input';
import { ProductScalarFieldEnum } from './product-scalar-field.enum';
import { ProductScalarWhereWithAggregatesInput } from './product-scalar-where-with-aggregates.input';
import { ProductCountAggregateInput } from './product-count-aggregate.input';
import { ProductAvgAggregateInput } from './product-avg-aggregate.input';
import { ProductSumAggregateInput } from './product-sum-aggregate.input';
import { ProductMinAggregateInput } from './product-min-aggregate.input';
import { ProductMaxAggregateInput } from './product-max-aggregate.input';
export declare class ProductGroupByArgs {
    where?: ProductWhereInput;
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductScalarFieldEnum>;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInput;
    _avg?: ProductAvgAggregateInput;
    _sum?: ProductSumAggregateInput;
    _min?: ProductMinAggregateInput;
    _max?: ProductMaxAggregateInput;
}
