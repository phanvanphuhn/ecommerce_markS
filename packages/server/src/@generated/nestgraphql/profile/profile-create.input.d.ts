import { AddressCreateNestedOneWithoutProfilesInput } from '../address/address-create-nested-one-without-profiles.input';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
export declare class ProfileCreateInput {
    mobile: string;
    preferredLanguage: string;
    address?: AddressCreateNestedOneWithoutProfilesInput;
    user: UserCreateNestedOneWithoutProfileInput;
}
