import { SortOrder } from '../prisma/sort-order.enum';
export declare class HospitalToDoctorAvgOrderByAggregateInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
}
