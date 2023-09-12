import { SortOrder } from '../prisma/sort-order.enum';
export declare class HospitalToDoctorSumOrderByAggregateInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
}
