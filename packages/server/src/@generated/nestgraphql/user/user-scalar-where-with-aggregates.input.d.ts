import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    password?: StringWithAggregatesFilter;
    firstName?: StringWithAggregatesFilter;
    lastName?: StringWithAggregatesFilter;
    role?: EnumRoleWithAggregatesFilter;
    reportingToId?: IntWithAggregatesFilter;
}
