import { Prisma } from '@prisma/client';

import { HospitalToDoctorUpdateInput } from './hospital-to-doctor-update.input';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
export declare class UpdateOneHospitalToDoctorArgs {
    data: HospitalToDoctorUpdateInput;
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
}
