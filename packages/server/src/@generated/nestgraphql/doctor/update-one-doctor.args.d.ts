import { Prisma } from '@prisma/client';

import { DoctorUpdateInput } from './doctor-update.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
export declare class UpdateOneDoctorArgs {
    data: DoctorUpdateInput;
    where: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
}
