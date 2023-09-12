import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
export declare class ProfileCreateWithoutAddressInput {
    mobile: string;
    preferredLanguage: string;
    user: UserCreateNestedOneWithoutProfileInput;
}
