import { PlanCallWhereInput } from './plan-call-where.input';
import { PlanCallOrderByWithAggregationInput } from './plan-call-order-by-with-aggregation.input';
import { PlanCallScalarFieldEnum } from './plan-call-scalar-field.enum';
import { PlanCallScalarWhereWithAggregatesInput } from './plan-call-scalar-where-with-aggregates.input';
import { PlanCallCountAggregateInput } from './plan-call-count-aggregate.input';
import { PlanCallMinAggregateInput } from './plan-call-min-aggregate.input';
import { PlanCallMaxAggregateInput } from './plan-call-max-aggregate.input';
export declare class PlanCallGroupByArgs {
    where?: PlanCallWhereInput;
    orderBy?: Array<PlanCallOrderByWithAggregationInput>;
    by: Array<keyof typeof PlanCallScalarFieldEnum>;
    having?: PlanCallScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanCallCountAggregateInput;
    _min?: PlanCallMinAggregateInput;
    _max?: PlanCallMaxAggregateInput;
}
