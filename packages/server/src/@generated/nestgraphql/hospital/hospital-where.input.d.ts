import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HospitalToDoctorListRelationFilter } from '../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input';
export declare class HospitalWhereInput {
    AND?: Array<HospitalWhereInput>;
    OR?: Array<HospitalWhereInput>;
    NOT?: Array<HospitalWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    address?: StringFilter;
    doctors?: HospitalToDoctorListRelationFilter;
}
