import { DoctorCreateWithoutHospitalsInput } from './doctor-create-without-hospitals.input';
import { DoctorCreateOrConnectWithoutHospitalsInput } from './doctor-create-or-connect-without-hospitals.input';
import { DoctorUpsertWithoutHospitalsInput } from './doctor-upsert-without-hospitals.input';
import { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorUpdateToOneWithWhereWithoutHospitalsInput } from './doctor-update-to-one-with-where-without-hospitals.input';
export declare class DoctorUpdateOneRequiredWithoutHospitalsNestedInput {
    create?: DoctorCreateWithoutHospitalsInput;
    connectOrCreate?: DoctorCreateOrConnectWithoutHospitalsInput;
    upsert?: DoctorUpsertWithoutHospitalsInput;
    connect?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    update?: DoctorUpdateToOneWithWhereWithoutHospitalsInput;
}
