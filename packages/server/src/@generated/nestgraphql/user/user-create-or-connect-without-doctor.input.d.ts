import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutDoctorInput } from './user-create-without-doctor.input';
export declare class UserCreateOrConnectWithoutDoctorInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    create: UserCreateWithoutDoctorInput;
}
