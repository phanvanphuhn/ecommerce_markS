import { Prisma } from '@prisma/client';

import { HospitalUpdateInput } from './hospital-update.input';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
export declare class UpdateOneHospitalArgs {
    data: HospitalUpdateInput;
    where: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
}
