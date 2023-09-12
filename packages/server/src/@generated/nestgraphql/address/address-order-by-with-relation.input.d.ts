import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByRelationAggregateInput } from '../profile/profile-order-by-relation-aggregate.input';
export declare class AddressOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    street?: SortOrderInput;
    city?: SortOrderInput;
    state?: SortOrderInput;
    zip?: SortOrderInput;
    country?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    profiles?: ProfileOrderByRelationAggregateInput;
}
