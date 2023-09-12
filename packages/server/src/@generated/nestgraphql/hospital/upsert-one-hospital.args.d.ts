import { Prisma } from '@prisma/client';

import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
import { HospitalCreateInput } from './hospital-create.input';
import { HospitalUpdateInput } from './hospital-update.input';
export declare class UpsertOneHospitalArgs {
    where: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
    create: HospitalCreateInput;
    update: HospitalUpdateInput;
}
