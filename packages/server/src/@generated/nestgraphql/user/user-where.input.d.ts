import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { ScheduleListRelationFilter } from '../schedule/schedule-list-relation-filter.input';
import { CaseLogListRelationFilter } from '../case-log/case-log-list-relation-filter.input';
import { DoctorRelationFilter } from '../doctor/doctor-relation-filter.input';

import { UserRelationFilter } from './user-relation-filter.input';
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: IntFilter;
    email?: StringFilter;
    password?: StringFilter;
    firstName?: StringFilter;
    lastName?: StringFilter;
    role?: EnumRoleFilter;
    reportingToId?: IntFilter;
    reportingTo?: UserRelationFilter;
    reportingBy?: UserRelationFilter;
    profile?: ProfileRelationFilter;
    Schedule?: ScheduleListRelationFilter;
    CaseLog?: CaseLogListRelationFilter;
    Doctor?: DoctorRelationFilter;
}
