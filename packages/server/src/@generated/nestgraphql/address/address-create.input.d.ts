import { ProfileCreateNestedManyWithoutAddressInput } from '../profile/profile-create-nested-many-without-address.input';
export declare class AddressCreateInput {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: ProfileCreateNestedManyWithoutAddressInput;
}
