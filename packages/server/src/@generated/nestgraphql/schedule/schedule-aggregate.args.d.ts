import { ScheduleWhereInput } from './schedule-where.input';
import { ScheduleOrderByWithRelationInput } from './schedule-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCountAggregateInput } from './schedule-count-aggregate.input';
import { ScheduleAvgAggregateInput } from './schedule-avg-aggregate.input';
import { ScheduleSumAggregateInput } from './schedule-sum-aggregate.input';
import { ScheduleMinAggregateInput } from './schedule-min-aggregate.input';
import { ScheduleMaxAggregateInput } from './schedule-max-aggregate.input';
export declare class ScheduleAggregateArgs {
    where?: ScheduleWhereInput;
    orderBy?: Array<ScheduleOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInput;
    _avg?: ScheduleAvgAggregateInput;
    _sum?: ScheduleSumAggregateInput;
    _min?: ScheduleMinAggregateInput;
    _max?: ScheduleMaxAggregateInput;
}
