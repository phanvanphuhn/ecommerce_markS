import { Prisma } from '@prisma/client';

import { HospitalToDoctorWhereInput } from './hospital-to-doctor-where.input';
import { HospitalToDoctorOrderByWithRelationInput } from './hospital-to-doctor-order-by-with-relation.input';
import { HospitalToDoctorWhereUniqueInput } from './hospital-to-doctor-where-unique.input';
import { HospitalToDoctorCountAggregateInput } from './hospital-to-doctor-count-aggregate.input';
import { HospitalToDoctorAvgAggregateInput } from './hospital-to-doctor-avg-aggregate.input';
import { HospitalToDoctorSumAggregateInput } from './hospital-to-doctor-sum-aggregate.input';
import { HospitalToDoctorMinAggregateInput } from './hospital-to-doctor-min-aggregate.input';
import { HospitalToDoctorMaxAggregateInput } from './hospital-to-doctor-max-aggregate.input';
export declare class HospitalToDoctorAggregateArgs {
    where?: HospitalToDoctorWhereInput;
    orderBy?: Array<HospitalToDoctorOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HospitalToDoctorWhereUniqueInput, 'hospitalId_doctorId'>;
    take?: number;
    skip?: number;
    _count?: HospitalToDoctorCountAggregateInput;
    _avg?: HospitalToDoctorAvgAggregateInput;
    _sum?: HospitalToDoctorSumAggregateInput;
    _min?: HospitalToDoctorMinAggregateInput;
    _max?: HospitalToDoctorMaxAggregateInput;
}
