import { PlanCallWhereInput } from './plan-call-where.input';
import { PlanCallOrderByWithRelationInput } from './plan-call-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
import { PlanCallCountAggregateInput } from './plan-call-count-aggregate.input';
import { PlanCallMinAggregateInput } from './plan-call-min-aggregate.input';
import { PlanCallMaxAggregateInput } from './plan-call-max-aggregate.input';
export declare class PlanCallAggregateArgs {
    where?: PlanCallWhereInput;
    orderBy?: Array<PlanCallOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
    take?: number;
    skip?: number;
    _count?: PlanCallCountAggregateInput;
    _min?: PlanCallMinAggregateInput;
    _max?: PlanCallMaxAggregateInput;
}
