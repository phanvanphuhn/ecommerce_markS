import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class PlanCallScalarWhereWithAggregatesInput {
    AND?: Array<PlanCallScalarWhereWithAggregatesInput>;
    OR?: Array<PlanCallScalarWhereWithAggregatesInput>;
    NOT?: Array<PlanCallScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    outcome?: StringWithAggregatesFilter;
    type?: StringWithAggregatesFilter;
    description?: StringWithAggregatesFilter;
    topics?: StringWithAggregatesFilter;
    scheduleId?: StringWithAggregatesFilter;
    deleted?: DateTimeWithAggregatesFilter;
}
