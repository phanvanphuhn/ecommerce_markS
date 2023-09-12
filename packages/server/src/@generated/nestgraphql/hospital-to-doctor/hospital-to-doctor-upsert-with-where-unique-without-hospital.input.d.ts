import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorUpdateWithoutHospitalInput } from './hospital-to-doctor-update-without-hospital.input';
import { HospitalToDoctorCreateWithoutHospitalInput } from './hospital-to-doctor-create-without-hospital.input';
export declare class HospitalToDoctorUpsertWithWhereUniqueWithoutHospitalInput {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    update: HospitalToDoctorUpdateWithoutHospitalInput;
    create: HospitalToDoctorCreateWithoutHospitalInput;
}
