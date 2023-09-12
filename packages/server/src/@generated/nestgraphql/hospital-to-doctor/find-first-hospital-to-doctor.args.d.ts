import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereInput } from './hospital-to-doctor-where.input';
import { HospitalToDoctorOrderByWithRelationInput } from './hospital-to-doctor-order-by-with-relation.input';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorScalarFieldEnum } from './hospital-to-doctor-scalar-field.enum';
export declare class FindFirstHospitalToDoctorArgs {
    where?: HospitalToDoctorWhereInput;
    orderBy?: Array<HospitalToDoctorOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HospitalToDoctorScalarFieldEnum>;
}
