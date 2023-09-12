import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorCreateInput } from './hospital-to-doctor-create.input';
import { HospitalToDoctorUpdateInput } from './hospital-to-doctor-update.input';
export declare class UpsertOneHospitalToDoctorArgs {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    create: HospitalToDoctorCreateInput;
    update: HospitalToDoctorUpdateInput;
}
