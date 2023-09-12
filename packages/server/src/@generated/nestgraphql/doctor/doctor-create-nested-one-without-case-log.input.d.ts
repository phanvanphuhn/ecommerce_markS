import { DoctorCreateWithoutCaseLogInput } from './doctor-create-without-case-log.input';
import { DoctorCreateOrConnectWithoutCaseLogInput } from './doctor-create-or-connect-without-case-log.input';
import { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
export declare class DoctorCreateNestedOneWithoutCaseLogInput {
    create?: DoctorCreateWithoutCaseLogInput;
    connectOrCreate?: DoctorCreateOrConnectWithoutCaseLogInput;
    connect?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
}
