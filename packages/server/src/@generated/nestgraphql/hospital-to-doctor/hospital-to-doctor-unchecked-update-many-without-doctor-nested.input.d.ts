import { HospitalToDoctorCreateWithoutDoctorInput } from './hospital-to-doctor-create-without-doctor.input';
import { HospitalToDoctorCreateOrConnectWithoutDoctorInput } from './hospital-to-doctor-create-or-connect-without-doctor.input';
import { HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput } from './hospital-to-doctor-upsert-with-where-unique-without-doctor.input';
import { HospitalToDoctorCreateManyDoctorInputEnvelope } from './hospital-to-doctor-create-many-doctor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorUpdateWithWhereUniqueWithoutDoctorInput } from './hospital-to-doctor-update-with-where-unique-without-doctor.input';
import { HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput } from './hospital-to-doctor-update-many-with-where-without-doctor.input';
import { HospitalToDoctorScalarWhereInput } from './hospital-to-doctor-scalar-where.input';
export declare class HospitalToDoctorUncheckedUpdateManyWithoutDoctorNestedInput {
    create?: Array<HospitalToDoctorCreateWithoutDoctorInput>;
    connectOrCreate?: Array<HospitalToDoctorCreateOrConnectWithoutDoctorInput>;
    upsert?: Array<HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput>;
    createMany?: HospitalToDoctorCreateManyDoctorInputEnvelope;
    set?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    disconnect?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    delete?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    connect?: Array<Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>>;
    update?: Array<HospitalToDoctorUpdateWithWhereUniqueWithoutDoctorInput>;
    updateMany?: Array<HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput>;
    deleteMany?: Array<HospitalToDoctorScalarWhereInput>;
}
