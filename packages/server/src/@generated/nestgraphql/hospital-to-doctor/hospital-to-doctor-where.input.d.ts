import { IntFilter } from '../prisma/int-filter.input';
import { HospitalRelationFilter } from '../hospital/hospital-relation-filter.input';
import { DoctorRelationFilter } from '../doctor/doctor-relation-filter.input';
export declare class HospitalToDoctorWhereInput {
    AND?: Array<HospitalToDoctorWhereInput>;
    OR?: Array<HospitalToDoctorWhereInput>;
    NOT?: Array<HospitalToDoctorWhereInput>;
    hospitalId?: IntFilter;
    doctorId?: IntFilter;
    hospital?: HospitalRelationFilter;
    doctor?: DoctorRelationFilter;
}
