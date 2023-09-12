import { ScheduleWhereInput } from './schedule-where.input';
import { ScheduleOrderByWithAggregationInput } from './schedule-order-by-with-aggregation.input';
import { ScheduleScalarFieldEnum } from './schedule-scalar-field.enum';
import { ScheduleScalarWhereWithAggregatesInput } from './schedule-scalar-where-with-aggregates.input';
import { ScheduleCountAggregateInput } from './schedule-count-aggregate.input';
import { ScheduleAvgAggregateInput } from './schedule-avg-aggregate.input';
import { ScheduleSumAggregateInput } from './schedule-sum-aggregate.input';
import { ScheduleMinAggregateInput } from './schedule-min-aggregate.input';
import { ScheduleMaxAggregateInput } from './schedule-max-aggregate.input';
export declare class ScheduleGroupByArgs {
    where?: ScheduleWhereInput;
    orderBy?: Array<ScheduleOrderByWithAggregationInput>;
    by: Array<keyof typeof ScheduleScalarFieldEnum>;
    having?: ScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInput;
    _avg?: ScheduleAvgAggregateInput;
    _sum?: ScheduleSumAggregateInput;
    _min?: ScheduleMinAggregateInput;
    _max?: ScheduleMaxAggregateInput;
}
