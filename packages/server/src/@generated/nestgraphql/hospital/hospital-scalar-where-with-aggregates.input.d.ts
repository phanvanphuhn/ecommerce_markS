import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
export declare class HospitalScalarWhereWithAggregatesInput {
    AND?: Array<HospitalScalarWhereWithAggregatesInput>;
    OR?: Array<HospitalScalarWhereWithAggregatesInput>;
    NOT?: Array<HospitalScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    address?: StringWithAggregatesFilter;
}
