import { AddressUpdateOneWithoutProfilesNestedInput } from '../address/address-update-one-without-profiles-nested.input';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';
export declare class ProfileUpdateInput {
    mobile?: string;
    preferredLanguage?: string;
    address?: AddressUpdateOneWithoutProfilesNestedInput;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
}
