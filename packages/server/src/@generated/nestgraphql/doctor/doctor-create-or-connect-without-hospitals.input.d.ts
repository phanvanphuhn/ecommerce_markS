import { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorCreateWithoutHospitalsInput } from './doctor-create-without-hospitals.input';
export declare class DoctorCreateOrConnectWithoutHospitalsInput {
    where: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    create: DoctorCreateWithoutHospitalsInput;
}
