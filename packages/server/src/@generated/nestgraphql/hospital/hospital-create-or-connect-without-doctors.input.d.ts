import { Prisma } from '@prisma/client';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
import { HospitalCreateWithoutDoctorsInput } from './hospital-create-without-doctors.input';
export declare class HospitalCreateOrConnectWithoutDoctorsInput {
    where: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
    create: HospitalCreateWithoutDoctorsInput;
}
