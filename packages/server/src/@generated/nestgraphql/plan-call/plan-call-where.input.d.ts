import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ScheduleRelationFilter } from '../schedule/schedule-relation-filter.input';
export declare class PlanCallWhereInput {
    AND?: Array<PlanCallWhereInput>;
    OR?: Array<PlanCallWhereInput>;
    NOT?: Array<PlanCallWhereInput>;
    id?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    outcome?: StringFilter;
    type?: StringFilter;
    description?: StringFilter;
    topics?: StringFilter;
    scheduleId?: StringFilter;
    deleted?: DateTimeFilter;
    schedule?: ScheduleRelationFilter;
}
