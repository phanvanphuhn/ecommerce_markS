import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

import { ProfileWhereInput } from './profile-where.input';
export declare class ProfileWhereUniqueInput {
    id?: number;
    userId?: number;
    AND?: Array<ProfileWhereInput>;
    OR?: Array<ProfileWhereInput>;
    NOT?: Array<ProfileWhereInput>;
    mobile?: StringFilter;
    addressId?: IntFilter;
    preferredLanguage?: StringFilter;
    address?: AddressRelationFilter;
    user?: UserRelationFilter;
}
