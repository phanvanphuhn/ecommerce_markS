import { HospitalToDoctorWhereInput } from './hospital-to-doctor-where.input';
import { HospitalToDoctorOrderByWithAggregationInput } from './hospital-to-doctor-order-by-with-aggregation.input';
import { HospitalToDoctorScalarFieldEnum } from './hospital-to-doctor-scalar-field.enum';
import { HospitalToDoctorScalarWhereWithAggregatesInput } from './hospital-to-doctor-scalar-where-with-aggregates.input';
import { HospitalToDoctorCountAggregateInput } from './hospital-to-doctor-count-aggregate.input';
import { HospitalToDoctorAvgAggregateInput } from './hospital-to-doctor-avg-aggregate.input';
import { HospitalToDoctorSumAggregateInput } from './hospital-to-doctor-sum-aggregate.input';
import { HospitalToDoctorMinAggregateInput } from './hospital-to-doctor-min-aggregate.input';
import { HospitalToDoctorMaxAggregateInput } from './hospital-to-doctor-max-aggregate.input';
export declare class HospitalToDoctorGroupByArgs {
    where?: HospitalToDoctorWhereInput;
    orderBy?: Array<HospitalToDoctorOrderByWithAggregationInput>;
    by: Array<keyof typeof HospitalToDoctorScalarFieldEnum>;
    having?: HospitalToDoctorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalToDoctorCountAggregateInput;
    _avg?: HospitalToDoctorAvgAggregateInput;
    _sum?: HospitalToDoctorSumAggregateInput;
    _min?: HospitalToDoctorMinAggregateInput;
    _max?: HospitalToDoctorMaxAggregateInput;
}
