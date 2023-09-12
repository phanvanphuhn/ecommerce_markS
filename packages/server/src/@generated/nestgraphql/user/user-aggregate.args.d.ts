import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
export declare class UserAggregateArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInput;
    _avg?: UserAvgAggregateInput;
    _sum?: UserSumAggregateInput;
    _min?: UserMinAggregateInput;
    _max?: UserMaxAggregateInput;
}
