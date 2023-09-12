import { Prisma } from '@prisma/client';

import { HospitalWhereInput } from './hospital-where.input';
import { HospitalOrderByWithRelationInput } from './hospital-order-by-with-relation.input';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
import { HospitalCountAggregateInput } from './hospital-count-aggregate.input';
import { HospitalAvgAggregateInput } from './hospital-avg-aggregate.input';
import { HospitalSumAggregateInput } from './hospital-sum-aggregate.input';
import { HospitalMinAggregateInput } from './hospital-min-aggregate.input';
import { HospitalMaxAggregateInput } from './hospital-max-aggregate.input';
export declare class HospitalAggregateArgs {
    where?: HospitalWhereInput;
    orderBy?: Array<HospitalOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: HospitalCountAggregateInput;
    _avg?: HospitalAvgAggregateInput;
    _sum?: HospitalSumAggregateInput;
    _min?: HospitalMinAggregateInput;
    _max?: HospitalMaxAggregateInput;
}
