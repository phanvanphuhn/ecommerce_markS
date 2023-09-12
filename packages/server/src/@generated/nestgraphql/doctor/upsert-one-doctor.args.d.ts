import { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorCreateInput } from './doctor-create.input';
import { DoctorUpdateInput } from './doctor-update.input';
export declare class UpsertOneDoctorArgs {
    where: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    create: DoctorCreateInput;
    update: DoctorUpdateInput;
}
