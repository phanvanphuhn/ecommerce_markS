import { Prisma } from '@prisma/client';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorCreateWithoutDoctorInput } from './hospital-to-doctor-create-without-doctor.input';
export declare class HospitalToDoctorCreateOrConnectWithoutDoctorInput {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    create: HospitalToDoctorCreateWithoutDoctorInput;
}
