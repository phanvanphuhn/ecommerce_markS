import { SortOrder } from '../prisma/sort-order.enum';
export declare class DoctorCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    specialties?: keyof typeof SortOrder;
    divisions?: keyof typeof SortOrder;
}
