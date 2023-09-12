import { SortOrder } from '../prisma/sort-order.enum';
export declare class HospitalToDoctorMaxOrderByAggregateInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
}
