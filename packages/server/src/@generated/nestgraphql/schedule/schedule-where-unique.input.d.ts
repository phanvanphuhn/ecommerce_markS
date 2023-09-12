import { ScheduleWhereInput } from './schedule-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumScheduleTypeFilter } from '../prisma/enum-schedule-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PlanCallRelationFilter } from '../plan-call/plan-call-relation-filter.input';
import { CaseLogRelationFilter } from '../case-log/case-log-relation-filter.input';
export declare class ScheduleWhereUniqueInput {
    id?: string;
    AND?: Array<ScheduleWhereInput>;
    OR?: Array<ScheduleWhereInput>;
    NOT?: Array<ScheduleWhereInput>;
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
    user?: UserRelationFilter;
    planCall?: PlanCallRelationFilter;
    caseLog?: CaseLogRelationFilter;
}
