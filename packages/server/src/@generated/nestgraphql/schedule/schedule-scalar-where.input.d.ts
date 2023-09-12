import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumScheduleTypeFilter } from '../prisma/enum-schedule-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
export declare class ScheduleScalarWhereInput {
    AND?: Array<ScheduleScalarWhereInput>;
    OR?: Array<ScheduleScalarWhereInput>;
    NOT?: Array<ScheduleScalarWhereInput>;
    id?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    subject?: StringFilter;
    location?: StringFilter;
    time?: StringFilter;
    endDate?: DateTimeFilter;
    startDate?: DateTimeFilter;
    scheduleType?: EnumScheduleTypeFilter;
    userId?: IntFilter;
    deleted?: DateTimeFilter;
}
