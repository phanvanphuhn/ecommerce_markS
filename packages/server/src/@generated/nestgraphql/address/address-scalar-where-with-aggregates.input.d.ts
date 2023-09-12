import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: Array<AddressScalarWhereWithAggregatesInput>;
    OR?: Array<AddressScalarWhereWithAggregatesInput>;
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    street?: StringWithAggregatesFilter;
    city?: StringWithAggregatesFilter;
    state?: StringWithAggregatesFilter;
    zip?: StringWithAggregatesFilter;
    country?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
