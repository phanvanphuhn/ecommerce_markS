import { Prisma } from '@prisma/client';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
export declare class FindUniqueHospitalToDoctorArgs {
    where: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
}
