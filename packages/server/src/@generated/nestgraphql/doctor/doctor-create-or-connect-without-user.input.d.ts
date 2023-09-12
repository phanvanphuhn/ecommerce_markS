import { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorCreateWithoutUserInput } from './doctor-create-without-user.input';
export declare class DoctorCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    create: DoctorCreateWithoutUserInput;
}
