import { Prisma } from '@prisma/client';

import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
export declare class FindUniqueDoctorOrThrowArgs {
    where: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
}
