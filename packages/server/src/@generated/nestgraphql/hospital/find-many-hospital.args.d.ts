import { HospitalWhereInput } from './hospital-where.input';
import { HospitalOrderByWithRelationInput } from './hospital-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
import { HospitalScalarFieldEnum } from './hospital-scalar-field.enum';
export declare class FindManyHospitalArgs {
    where?: HospitalWhereInput;
    orderBy?: Array<HospitalOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HospitalScalarFieldEnum>;
}
