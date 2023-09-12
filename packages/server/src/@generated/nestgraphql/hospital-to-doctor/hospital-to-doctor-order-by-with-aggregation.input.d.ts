import { SortOrder } from '../prisma/sort-order.enum';
import { HospitalToDoctorCountOrderByAggregateInput } from './hospital-to-doctor-count-order-by-aggregate.input';
import { HospitalToDoctorAvgOrderByAggregateInput } from './hospital-to-doctor-avg-order-by-aggregate.input';
import { HospitalToDoctorMaxOrderByAggregateInput } from './hospital-to-doctor-max-order-by-aggregate.input';
import { HospitalToDoctorMinOrderByAggregateInput } from './hospital-to-doctor-min-order-by-aggregate.input';
import { HospitalToDoctorSumOrderByAggregateInput } from './hospital-to-doctor-sum-order-by-aggregate.input';
export declare class HospitalToDoctorOrderByWithAggregationInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
    _count?: HospitalToDoctorCountOrderByAggregateInput;
    _avg?: HospitalToDoctorAvgOrderByAggregateInput;
    _max?: HospitalToDoctorMaxOrderByAggregateInput;
    _min?: HospitalToDoctorMinOrderByAggregateInput;
    _sum?: HospitalToDoctorSumOrderByAggregateInput;
}
