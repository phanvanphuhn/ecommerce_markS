import { Prisma } from '@prisma/client';

import { HospitalToDoctorCreateWithoutHospitalInput } from './hospital-to-doctor-create-without-hospital.input';
import { HospitalToDoctorCreateOrConnectWithoutHospitalInput } from './hospital-to-doctor-create-or-connect-without-hospital.input';
import { HospitalToDoctorUpsertWithWhereUniqueWithoutHospitalInput } from './hospital-to-doctor-upsert-with-where-unique-without-hospital.input';
import { HospitalToDoctorCreateManyHospitalInputEnvelope } from './hospital-to-doctor-create-many-hospital-input-envelope.input';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorUpdateWithWhereUniqueWithoutHospitalInput } from './hospital-to-doctor-update-with-where-unique-without-hospital.input';
import { HospitalToDoctorUpdateManyWithWhereWithoutHospitalInput } from './hospital-to-doctor-update-many-with-where-without-hospital.input';
import { HospitalToDoctorScalarWhereInput } from './hospital-to-doctor-scalar-where.input';
export declare class HospitalToDoctorUpdateManyWithoutHospitalNestedInput {
    create?: Array<HospitalToDoctorCreateWithoutHospitalInput>;
    connectOrCreate?: Array<HospitalToDoctorCreateOrConnectWithoutHospitalInput>;
    upsert?: Array<HospitalToDoctorUpsertWithWhereUniqueWithoutHospitalInput>;
    createMany?: HospitalToDoctorCreateManyHospitalInputEnvelope;
    set?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    disconnect?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    delete?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    connect?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    update?: Array<HospitalToDoctorUpdateWithWhereUniqueWithoutHospitalInput>;
    updateMany?: Array<HospitalToDoctorUpdateManyWithWhereWithoutHospitalInput>;
    deleteMany?: Array<HospitalToDoctorScalarWhereInput>;
}
