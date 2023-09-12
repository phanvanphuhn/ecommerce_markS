import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    reportingToId?: keyof typeof SortOrder;
}
