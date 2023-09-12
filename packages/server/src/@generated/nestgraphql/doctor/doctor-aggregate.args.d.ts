import { Prisma } from '@prisma/client';

import { DoctorWhereInput } from './doctor-where.input';
import { DoctorOrderByWithRelationInput } from './doctor-order-by-with-relation.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorCountAggregateInput } from './doctor-count-aggregate.input';
import { DoctorAvgAggregateInput } from './doctor-avg-aggregate.input';
import { DoctorSumAggregateInput } from './doctor-sum-aggregate.input';
import { DoctorMinAggregateInput } from './doctor-min-aggregate.input';
import { DoctorMaxAggregateInput } from './doctor-max-aggregate.input';
export declare class DoctorAggregateArgs {
    where?: DoctorWhereInput;
    orderBy?: Array<DoctorOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    _count?: DoctorCountAggregateInput;
    _avg?: DoctorAvgAggregateInput;
    _sum?: DoctorSumAggregateInput;
    _min?: DoctorMinAggregateInput;
    _max?: DoctorMaxAggregateInput;
}
