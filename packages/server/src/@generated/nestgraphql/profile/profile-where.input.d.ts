import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class ProfileWhereInput {
    AND?: Array<ProfileWhereInput>;
    OR?: Array<ProfileWhereInput>;
    NOT?: Array<ProfileWhereInput>;
    id?: IntFilter;
    mobile?: StringFilter;
    addressId?: IntFilter;
    preferredLanguage?: StringFilter;
    userId?: IntFilter;
    address?: AddressRelationFilter;
    user?: UserRelationFilter;
}
