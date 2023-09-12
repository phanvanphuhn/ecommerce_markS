import { IntFilter } from '../prisma/int-filter.input';
import { HospitalRelationFilter } from '../hospital/hospital-relation-filter.input';
import { DoctorRelationFilter } from '../doctor/doctor-relation-filter.input';

import { HospitalToDoctorWhereInput } from './hospital-to-doctor-where.input';
import { HospitalToDoctorHospitalIdDoctorIdCompoundUniqueInput } from './hospital-to-doctor-hospital-id-doctor-id-compound-unique.input';
export declare class HospitalToDoctorWhereUniqueInput {
    hospitalId_doctorId?: HospitalToDoctorHospitalIdDoctorIdCompoundUniqueInput;
    AND?: Array<HospitalToDoctorWhereInput>;
    OR?: Array<HospitalToDoctorWhereInput>;
    NOT?: Array<HospitalToDoctorWhereInput>;
    hospitalId?: IntFilter;
    doctorId?: IntFilter;
    hospital?: HospitalRelationFilter;
    doctor?: DoctorRelationFilter;
}
