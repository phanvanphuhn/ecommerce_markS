import { Prisma } from '@prisma/client';

import { DoctorCreateWithoutUserInput } from './doctor-create-without-user.input';
import { DoctorCreateOrConnectWithoutUserInput } from './doctor-create-or-connect-without-user.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
export declare class DoctorCreateNestedOneWithoutUserInput {
    create?: DoctorCreateWithoutUserInput;
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput;
    connect?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
}
