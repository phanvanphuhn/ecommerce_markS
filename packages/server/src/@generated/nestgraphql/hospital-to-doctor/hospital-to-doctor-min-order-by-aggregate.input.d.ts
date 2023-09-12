import { SortOrder } from '../prisma/sort-order.enum';
export declare class HospitalToDoctorMinOrderByAggregateInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
}
