import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumScheduleTypeWithAggregatesFilter } from '../prisma/enum-schedule-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
export declare class ScheduleScalarWhereWithAggregatesInput {
    AND?: Array<ScheduleScalarWhereWithAggregatesInput>;
    OR?: Array<ScheduleScalarWhereWithAggregatesInput>;
    NOT?: Array<ScheduleScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    subject?: StringWithAggregatesFilter;
    location?: StringWithAggregatesFilter;
    time?: StringWithAggregatesFilter;
    endDate?: DateTimeWithAggregatesFilter;
    startDate?: DateTimeWithAggregatesFilter;
    scheduleType?: EnumScheduleTypeWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    deleted?: DateTimeWithAggregatesFilter;
}
