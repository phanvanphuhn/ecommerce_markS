import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    mobile?: StringWithAggregatesFilter;
    addressId?: IntWithAggregatesFilter;
    preferredLanguage?: StringWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
}
