import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

import { ScheduleCountOrderByAggregateInput } from './schedule-count-order-by-aggregate.input';
import { ScheduleAvgOrderByAggregateInput } from './schedule-avg-order-by-aggregate.input';
import { ScheduleMaxOrderByAggregateInput } from './schedule-max-order-by-aggregate.input';
import { ScheduleMinOrderByAggregateInput } from './schedule-min-order-by-aggregate.input';
import { ScheduleSumOrderByAggregateInput } from './schedule-sum-order-by-aggregate.input';
export declare class ScheduleOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    subject?: keyof typeof SortOrder;
    location?: SortOrderInput;
    time?: SortOrderInput;
    endDate?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    scheduleType?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deleted?: SortOrderInput;
    _count?: ScheduleCountOrderByAggregateInput;
    _avg?: ScheduleAvgOrderByAggregateInput;
    _max?: ScheduleMaxOrderByAggregateInput;
    _min?: ScheduleMinOrderByAggregateInput;
    _sum?: ScheduleSumOrderByAggregateInput;
}
