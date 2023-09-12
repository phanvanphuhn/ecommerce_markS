import { Prisma } from '@prisma/client';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
export declare class DeleteOneHospitalArgs {
    where: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
}
