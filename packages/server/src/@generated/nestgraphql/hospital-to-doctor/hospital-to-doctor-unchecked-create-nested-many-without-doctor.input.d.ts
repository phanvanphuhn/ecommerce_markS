import { Prisma } from '@prisma/client';

import { HospitalToDoctorCreateWithoutDoctorInput } from './hospital-to-doctor-create-without-doctor.input';
import { HospitalToDoctorCreateOrConnectWithoutDoctorInput } from './hospital-to-doctor-create-or-connect-without-doctor.input';
import { HospitalToDoctorCreateManyDoctorInputEnvelope } from './hospital-to-doctor-create-many-doctor-input-envelope.input';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
export declare class HospitalToDoctorUncheckedCreateNestedManyWithoutDoctorInput {
    create?: Array<HospitalToDoctorCreateWithoutDoctorInput>;
    connectOrCreate?: Array<HospitalToDoctorCreateOrConnectWithoutDoctorInput>;
    createMany?: HospitalToDoctorCreateManyDoctorInputEnvelope;
    connect?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
}
