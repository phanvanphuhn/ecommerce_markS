import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorUpdateWithoutDoctorInput } from './hospital-to-doctor-update-without-doctor.input';
export declare class HospitalToDoctorUpdateWithWhereUniqueWithoutDoctorInput {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    data: HospitalToDoctorUpdateWithoutDoctorInput;
}
