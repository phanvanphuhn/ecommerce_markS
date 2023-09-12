import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

import { PlanCallCountOrderByAggregateInput } from './plan-call-count-order-by-aggregate.input';
import { PlanCallMaxOrderByAggregateInput } from './plan-call-max-order-by-aggregate.input';
import { PlanCallMinOrderByAggregateInput } from './plan-call-min-order-by-aggregate.input';
export declare class PlanCallOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    outcome?: SortOrderInput;
    type?: SortOrderInput;
    description?: SortOrderInput;
    topics?: SortOrderInput;
    scheduleId?: keyof typeof SortOrder;
    deleted?: SortOrderInput;
    _count?: PlanCallCountOrderByAggregateInput;
    _max?: PlanCallMaxOrderByAggregateInput;
    _min?: PlanCallMinOrderByAggregateInput;
}
