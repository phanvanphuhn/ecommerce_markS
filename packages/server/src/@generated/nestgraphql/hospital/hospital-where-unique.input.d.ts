import { HospitalWhereInput } from './hospital-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HospitalToDoctorListRelationFilter } from '../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input';
export declare class HospitalWhereUniqueInput {
    id?: number;
    AND?: Array<HospitalWhereInput>;
    OR?: Array<HospitalWhereInput>;
    NOT?: Array<HospitalWhereInput>;
    name?: StringFilter;
    address?: StringFilter;
    doctors?: HospitalToDoctorListRelationFilter;
}
