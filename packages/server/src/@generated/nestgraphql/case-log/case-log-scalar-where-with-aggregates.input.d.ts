import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
export declare class CaseLogScalarWhereWithAggregatesInput {
    AND?: Array<CaseLogScalarWhereWithAggregatesInput>;
    OR?: Array<CaseLogScalarWhereWithAggregatesInput>;
    NOT?: Array<CaseLogScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    accountId?: IntWithAggregatesFilter;
    doctorId?: IntWithAggregatesFilter;
    photoUrl?: StringWithAggregatesFilter;
    productsInvoiceId?: StringWithAggregatesFilter;
    scheduleId?: StringWithAggregatesFilter;
    deleted?: DateTimeWithAggregatesFilter;
}
