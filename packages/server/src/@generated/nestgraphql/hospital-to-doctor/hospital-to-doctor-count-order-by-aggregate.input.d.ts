import { SortOrder } from '../prisma/sort-order.enum';
export declare class HospitalToDoctorCountOrderByAggregateInput {
    hospitalId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
}
