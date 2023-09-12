import { Prisma } from '@prisma/client';

import { DoctorCreateWithoutHospitalsInput } from './doctor-create-without-hospitals.input';
import { DoctorCreateOrConnectWithoutHospitalsInput } from './doctor-create-or-connect-without-hospitals.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
export declare class DoctorCreateNestedOneWithoutHospitalsInput {
    create?: DoctorCreateWithoutHospitalsInput;
    connectOrCreate?: DoctorCreateOrConnectWithoutHospitalsInput;
    connect?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
}
