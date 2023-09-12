import { PlanCallWhereInput } from './plan-call-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ScheduleRelationFilter } from '../schedule/schedule-relation-filter.input';
export declare class PlanCallWhereUniqueInput {
    id?: string;
    scheduleId?: string;
    AND?: Array<PlanCallWhereInput>;
    OR?: Array<PlanCallWhereInput>;
    NOT?: Array<PlanCallWhereInput>;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    outcome?: StringFilter;
    type?: StringFilter;
    description?: StringFilter;
    topics?: StringFilter;
    deleted?: DateTimeFilter;
    schedule?: ScheduleRelationFilter;
}
