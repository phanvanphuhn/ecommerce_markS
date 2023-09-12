import { SortOrder } from '../prisma/sort-order.enum';
export declare class ProfileMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    mobile?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    preferredLanguage?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
