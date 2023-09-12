import { ProfileUpdateManyWithoutAddressNestedInput } from '../profile/profile-update-many-without-address-nested.input';
export declare class AddressUpdateInput {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: ProfileUpdateManyWithoutAddressNestedInput;
}
