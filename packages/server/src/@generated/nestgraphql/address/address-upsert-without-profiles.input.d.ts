import { AddressUpdateWithoutProfilesInput } from './address-update-without-profiles.input';
import { AddressCreateWithoutProfilesInput } from './address-create-without-profiles.input';
import { AddressWhereInput } from './address-where.input';
export declare class AddressUpsertWithoutProfilesInput {
    update: AddressUpdateWithoutProfilesInput;
    create: AddressCreateWithoutProfilesInput;
    where?: AddressWhereInput;
}
