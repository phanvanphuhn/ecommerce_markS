import { DoctorWhereInput } from './doctor-where.input';
import { DoctorOrderByWithAggregationInput } from './doctor-order-by-with-aggregation.input';
import { DoctorScalarFieldEnum } from './doctor-scalar-field.enum';
import { DoctorScalarWhereWithAggregatesInput } from './doctor-scalar-where-with-aggregates.input';
import { DoctorCountAggregateInput } from './doctor-count-aggregate.input';
import { DoctorAvgAggregateInput } from './doctor-avg-aggregate.input';
import { DoctorSumAggregateInput } from './doctor-sum-aggregate.input';
import { DoctorMinAggregateInput } from './doctor-min-aggregate.input';
import { DoctorMaxAggregateInput } from './doctor-max-aggregate.input';
export declare class DoctorGroupByArgs {
    where?: DoctorWhereInput;
    orderBy?: Array<DoctorOrderByWithAggregationInput>;
    by: Array<keyof typeof DoctorScalarFieldEnum>;
    having?: DoctorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorCountAggregateInput;
    _avg?: DoctorAvgAggregateInput;
    _sum?: DoctorSumAggregateInput;
    _min?: DoctorMinAggregateInput;
    _max?: DoctorMaxAggregateInput;
}
