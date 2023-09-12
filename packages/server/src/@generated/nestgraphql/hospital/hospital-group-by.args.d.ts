import { HospitalWhereInput } from './hospital-where.input';
import { HospitalOrderByWithAggregationInput } from './hospital-order-by-with-aggregation.input';
import { HospitalScalarFieldEnum } from './hospital-scalar-field.enum';
import { HospitalScalarWhereWithAggregatesInput } from './hospital-scalar-where-with-aggregates.input';
import { HospitalCountAggregateInput } from './hospital-count-aggregate.input';
import { HospitalAvgAggregateInput } from './hospital-avg-aggregate.input';
import { HospitalSumAggregateInput } from './hospital-sum-aggregate.input';
import { HospitalMinAggregateInput } from './hospital-min-aggregate.input';
import { HospitalMaxAggregateInput } from './hospital-max-aggregate.input';
export declare class HospitalGroupByArgs {
    where?: HospitalWhereInput;
    orderBy?: Array<HospitalOrderByWithAggregationInput>;
    by: Array<keyof typeof HospitalScalarFieldEnum>;
    having?: HospitalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalCountAggregateInput;
    _avg?: HospitalAvgAggregateInput;
    _sum?: HospitalSumAggregateInput;
    _min?: HospitalMinAggregateInput;
    _max?: HospitalMaxAggregateInput;
}
