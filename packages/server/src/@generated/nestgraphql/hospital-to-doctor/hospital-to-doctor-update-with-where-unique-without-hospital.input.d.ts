import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorUpdateWithoutHospitalInput } from './hospital-to-doctor-update-without-hospital.input';
export declare class HospitalToDoctorUpdateWithWhereUniqueWithoutHospitalInput {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    data: HospitalToDoctorUpdateWithoutHospitalInput;
}
