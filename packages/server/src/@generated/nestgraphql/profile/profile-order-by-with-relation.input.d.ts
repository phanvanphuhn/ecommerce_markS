import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class ProfileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    mobile?: keyof typeof SortOrder;
    addressId?: SortOrderInput;
    preferredLanguage?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    address?: AddressOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
}
