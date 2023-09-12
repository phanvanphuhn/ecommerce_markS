import { Prisma } from '@prisma/client';

import { DoctorWhereInput } from './doctor-where.input';
import { DoctorOrderByWithRelationInput } from './doctor-order-by-with-relation.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorScalarFieldEnum } from './doctor-scalar-field.enum';
export declare class FindFirstDoctorArgs {
    where?: DoctorWhereInput;
    orderBy?: Array<DoctorOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DoctorScalarFieldEnum>;
}
