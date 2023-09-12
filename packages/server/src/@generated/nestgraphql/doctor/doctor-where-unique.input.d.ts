import { DoctorWhereInput } from './doctor-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSpecialtyListFilter } from '../prisma/enum-specialty-list-filter.input';
import { EnumDivisionListFilter } from '../prisma/enum-division-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CaseLogListRelationFilter } from '../case-log/case-log-list-relation-filter.input';
import { HospitalToDoctorListRelationFilter } from '../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input';
export declare class DoctorWhereUniqueInput {
    id?: number;
    userId?: number;
    AND?: Array<DoctorWhereInput>;
    OR?: Array<DoctorWhereInput>;
    NOT?: Array<DoctorWhereInput>;
    title?: StringFilter;
    specialties?: EnumSpecialtyListFilter;
    divisions?: EnumDivisionListFilter;
    user?: UserRelationFilter;
    caseLog?: CaseLogListRelationFilter;
    hospitals?: HospitalToDoctorListRelationFilter;
}
