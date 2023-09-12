import { Prisma } from '@prisma/client';

import { UserCreateWithoutDoctorInput } from './user-create-without-doctor.input';
import { UserCreateOrConnectWithoutDoctorInput } from './user-create-or-connect-without-doctor.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutDoctorInput {
    create?: UserCreateWithoutDoctorInput;
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
}
