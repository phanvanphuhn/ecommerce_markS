import { Prisma } from '@prisma/client';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorUpdateWithoutDoctorInput } from './hospital-to-doctor-update-without-doctor.input';
import { HospitalToDoctorCreateWithoutDoctorInput } from './hospital-to-doctor-create-without-doctor.input';
export declare class HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    update: HospitalToDoctorUpdateWithoutDoctorInput;
    create: HospitalToDoctorCreateWithoutDoctorInput;
}
