import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { UserRelationFilter } from './user-relation-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { ScheduleListRelationFilter } from '../schedule/schedule-list-relation-filter.input';
import { CaseLogListRelationFilter } from '../case-log/case-log-list-relation-filter.input';
import { DoctorRelationFilter } from '../doctor/doctor-relation-filter.input';
export declare class UserWhereUniqueInput {
    id?: number;
    email?: string;
    reportingToId?: number;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    password?: StringFilter;
    firstName?: StringFilter;
    lastName?: StringFilter;
    role?: EnumRoleFilter;
    reportingTo?: UserRelationFilter;
    reportingBy?: UserRelationFilter;
    profile?: ProfileRelationFilter;
    Schedule?: ScheduleListRelationFilter;
    CaseLog?: CaseLogListRelationFilter;
    Doctor?: DoctorRelationFilter;
}
