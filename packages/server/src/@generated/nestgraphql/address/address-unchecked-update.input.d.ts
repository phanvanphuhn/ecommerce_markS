import { ProfileUncheckedUpdateManyWithoutAddressNestedInput } from '../profile/profile-unchecked-update-many-without-address-nested.input';
export declare class AddressUncheckedUpdateInput {
    id?: number;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: ProfileUncheckedUpdateManyWithoutAddressNestedInput;
}
