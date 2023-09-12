import { Prisma } from '@prisma/client';

import { HospitalToDoctorCreateWithoutHospitalInput } from './hospital-to-doctor-create-without-hospital.input';
import { HospitalToDoctorCreateOrConnectWithoutHospitalInput } from './hospital-to-doctor-create-or-connect-without-hospital.input';
import { HospitalToDoctorCreateManyHospitalInputEnvelope } from './hospital-to-doctor-create-many-hospital-input-envelope.input';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
export declare class HospitalToDoctorCreateNestedManyWithoutHospitalInput {
    create?: Array<HospitalToDoctorCreateWithoutHospitalInput>;
    connectOrCreate?: Array<HospitalToDoctorCreateOrConnectWithoutHospitalInput>;
    createMany?: HospitalToDoctorCreateManyHospitalInputEnvelope;
    connect?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
}
