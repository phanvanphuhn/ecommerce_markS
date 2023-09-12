import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumSpecialtyListFilter } from '../prisma/enum-specialty-list-filter.input';
import { EnumDivisionListFilter } from '../prisma/enum-division-list-filter.input';
export declare class DoctorScalarWhereWithAggregatesInput {
    AND?: Array<DoctorScalarWhereWithAggregatesInput>;
    OR?: Array<DoctorScalarWhereWithAggregatesInput>;
    NOT?: Array<DoctorScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    specialties?: EnumSpecialtyListFilter;
    divisions?: EnumDivisionListFilter;
}
