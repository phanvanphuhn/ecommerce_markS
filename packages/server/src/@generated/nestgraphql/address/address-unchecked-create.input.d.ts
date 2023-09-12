import { ProfileUncheckedCreateNestedManyWithoutAddressInput } from '../profile/profile-unchecked-create-nested-many-without-address.input';
export declare class AddressUncheckedCreateInput {
    id?: number;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: ProfileUncheckedCreateNestedManyWithoutAddressInput;
}
