import { PlanCallCountAggregate } from './plan-call-count-aggregate.output';
import { PlanCallMinAggregate } from './plan-call-min-aggregate.output';
import { PlanCallMaxAggregate } from './plan-call-max-aggregate.output';
export declare class AggregatePlanCall {
    _count?: PlanCallCountAggregate;
    _min?: PlanCallMinAggregate;
    _max?: PlanCallMaxAggregate;
}
