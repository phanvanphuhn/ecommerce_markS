import { CaseLogWhereInput } from './case-log-where.input';
import { CaseLogOrderByWithAggregationInput } from './case-log-order-by-with-aggregation.input';
import { CaseLogScalarFieldEnum } from './case-log-scalar-field.enum';
import { CaseLogScalarWhereWithAggregatesInput } from './case-log-scalar-where-with-aggregates.input';
import { CaseLogCountAggregateInput } from './case-log-count-aggregate.input';
import { CaseLogAvgAggregateInput } from './case-log-avg-aggregate.input';
import { CaseLogSumAggregateInput } from './case-log-sum-aggregate.input';
import { CaseLogMinAggregateInput } from './case-log-min-aggregate.input';
import { CaseLogMaxAggregateInput } from './case-log-max-aggregate.input';
export declare class CaseLogGroupByArgs {
    where?: CaseLogWhereInput;
    orderBy?: Array<CaseLogOrderByWithAggregationInput>;
    by: Array<keyof typeof CaseLogScalarFieldEnum>;
    having?: CaseLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CaseLogCountAggregateInput;
    _avg?: CaseLogAvgAggregateInput;
    _sum?: CaseLogSumAggregateInput;
    _min?: CaseLogMinAggregateInput;
    _max?: CaseLogMaxAggregateInput;
}
