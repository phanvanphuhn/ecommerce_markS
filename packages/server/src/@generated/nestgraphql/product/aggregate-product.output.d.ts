import { ProductCountAggregate } from './product-count-aggregate.output';
import { ProductAvgAggregate } from './product-avg-aggregate.output';
import { ProductSumAggregate } from './product-sum-aggregate.output';
import { ProductMinAggregate } from './product-min-aggregate.output';
import { ProductMaxAggregate } from './product-max-aggregate.output';
export declare class AggregateProduct {
    _count?: ProductCountAggregate;
    _avg?: ProductAvgAggregate;
    _sum?: ProductSumAggregate;
    _min?: ProductMinAggregate;
    _max?: ProductMaxAggregate;
}
