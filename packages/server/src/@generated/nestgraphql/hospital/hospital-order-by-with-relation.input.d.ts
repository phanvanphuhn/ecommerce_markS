import { SortOrder } from '../prisma/sort-order.enum';
import { HospitalToDoctorOrderByRelationAggregateInput } from '../hospital-to-doctor/hospital-to-doctor-order-by-relation-aggregate.input';
export declare class HospitalOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    doctors?: HospitalToDoctorOrderByRelationAggregateInput;
}
