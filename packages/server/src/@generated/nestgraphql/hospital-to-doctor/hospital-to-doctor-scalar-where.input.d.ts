import { IntFilter } from '../prisma/int-filter.input';
export declare class HospitalToDoctorScalarWhereInput {
    AND?: Array<HospitalToDoctorScalarWhereInput>;
    OR?: Array<HospitalToDoctorScalarWhereInput>;
    NOT?: Array<HospitalToDoctorScalarWhereInput>;
    hospitalId?: IntFilter;
    doctorId?: IntFilter;
}
