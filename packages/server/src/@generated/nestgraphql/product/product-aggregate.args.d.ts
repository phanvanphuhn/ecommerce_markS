import { ProductWhereInput } from './product-where.input';
import { ProductOrderByWithRelationInput } from './product-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCountAggregateInput } from './product-count-aggregate.input';
import { ProductAvgAggregateInput } from './product-avg-aggregate.input';
import { ProductSumAggregateInput } from './product-sum-aggregate.input';
import { ProductMinAggregateInput } from './product-min-aggregate.input';
import { ProductMaxAggregateInput } from './product-max-aggregate.input';
export declare class ProductAggregateArgs {
    where?: ProductWhereInput;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInput;
    _avg?: ProductAvgAggregateInput;
    _sum?: ProductSumAggregateInput;
    _min?: ProductMinAggregateInput;
    _max?: ProductMaxAggregateInput;
}
