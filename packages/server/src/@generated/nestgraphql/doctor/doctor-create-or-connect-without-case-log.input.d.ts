import { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorCreateWithoutCaseLogInput } from './doctor-create-without-case-log.input';
export declare class DoctorCreateOrConnectWithoutCaseLogInput {
    where: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    create: DoctorCreateWithoutCaseLogInput;
}
