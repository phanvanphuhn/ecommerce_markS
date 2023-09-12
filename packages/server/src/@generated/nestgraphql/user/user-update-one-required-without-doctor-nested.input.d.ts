import { UserCreateWithoutDoctorInput } from './user-create-without-doctor.input';
import { UserCreateOrConnectWithoutDoctorInput } from './user-create-or-connect-without-doctor.input';
import { UserUpsertWithoutDoctorInput } from './user-upsert-without-doctor.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDoctorInput } from './user-update-to-one-with-where-without-doctor.input';
export declare class UserUpdateOneRequiredWithoutDoctorNestedInput {
    create?: UserCreateWithoutDoctorInput;
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput;
    upsert?: UserUpsertWithoutDoctorInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    update?: UserUpdateToOneWithWhereWithoutDoctorInput;
}
