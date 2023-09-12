import { PlanCallCountAggregate } from './plan-call-count-aggregate.output';
import { PlanCallMinAggregate } from './plan-call-min-aggregate.output';
import { PlanCallMaxAggregate } from './plan-call-max-aggregate.output';
export declare class PlanCallGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    outcome?: string;
    type?: string;
    description?: string;
    topics?: string;
    scheduleId: string;
    deleted?: Date | string;
    _count?: PlanCallCountAggregate;
    _min?: PlanCallMinAggregate;
    _max?: PlanCallMaxAggregate;
}
