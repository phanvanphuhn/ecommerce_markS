import { CaseLogCountAggregate } from './case-log-count-aggregate.output';
import { CaseLogAvgAggregate } from './case-log-avg-aggregate.output';
import { CaseLogSumAggregate } from './case-log-sum-aggregate.output';
import { CaseLogMinAggregate } from './case-log-min-aggregate.output';
import { CaseLogMaxAggregate } from './case-log-max-aggregate.output';
export declare class AggregateCaseLog {
    _count?: CaseLogCountAggregate;
    _avg?: CaseLogAvgAggregate;
    _sum?: CaseLogSumAggregate;
    _min?: CaseLogMinAggregate;
    _max?: CaseLogMaxAggregate;
}
