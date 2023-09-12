import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
export declare class ProfileScalarWhereInput {
    AND?: Array<ProfileScalarWhereInput>;
    OR?: Array<ProfileScalarWhereInput>;
    NOT?: Array<ProfileScalarWhereInput>;
    id?: IntFilter;
    mobile?: StringFilter;
    addressId?: IntFilter;
    preferredLanguage?: StringFilter;
    userId?: IntFilter;
}
