import { SortOrder } from '../prisma/sort-order.enum';
export declare class AddressMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    street?: keyof typeof SortOrder;
    city?: keyof typeof SortOrder;
    state?: keyof typeof SortOrder;
    zip?: keyof typeof SortOrder;
    country?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
