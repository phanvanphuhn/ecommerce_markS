import { HospitalCreateWithoutDoctorsInput } from './hospital-create-without-doctors.input';
import { HospitalCreateOrConnectWithoutDoctorsInput } from './hospital-create-or-connect-without-doctors.input';
import { Prisma } from '@prisma/client';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
export declare class HospitalCreateNestedOneWithoutDoctorsInput {
    create?: HospitalCreateWithoutDoctorsInput;
    connectOrCreate?: HospitalCreateOrConnectWithoutDoctorsInput;
    connect?: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
}
