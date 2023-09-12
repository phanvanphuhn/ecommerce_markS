import { AddressCreateNestedOneWithoutProfilesInput } from '../address/address-create-nested-one-without-profiles.input';
export declare class ProfileCreateWithoutUserInput {
    mobile: string;
    preferredLanguage: string;
    address?: AddressCreateNestedOneWithoutProfilesInput;
}
