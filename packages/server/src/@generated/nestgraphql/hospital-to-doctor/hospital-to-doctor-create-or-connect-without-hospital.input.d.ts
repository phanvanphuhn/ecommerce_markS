import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorCreateWithoutHospitalInput } from './hospital-to-doctor-create-without-hospital.input';
export declare class HospitalToDoctorCreateOrConnectWithoutHospitalInput {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    create: HospitalToDoctorCreateWithoutHospitalInput;
}
