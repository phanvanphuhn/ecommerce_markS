import { SortOrder } from '../prisma/sort-order.enum';
import { HospitalOrderByWithRelationInput } from '../hospital/hospital-order-by-with-relation.input';
import { DoctorOrderByWithRelationInput } from '../doctor/doctor-order-by-with-relation.input';
export declare class HospitalToDoctorOrderByWithRelationInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
    hospital?: HospitalOrderByWithRelationInput;
    doctor?: DoctorOrderByWithRelationInput;
}
