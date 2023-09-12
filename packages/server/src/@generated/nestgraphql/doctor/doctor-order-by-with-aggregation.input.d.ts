import { SortOrder } from '../prisma/sort-order.enum';

import { DoctorCountOrderByAggregateInput } from './doctor-count-order-by-aggregate.input';
import { DoctorAvgOrderByAggregateInput } from './doctor-avg-order-by-aggregate.input';
import { DoctorMaxOrderByAggregateInput } from './doctor-max-order-by-aggregate.input';
import { DoctorMinOrderByAggregateInput } from './doctor-min-order-by-aggregate.input';
import { DoctorSumOrderByAggregateInput } from './doctor-sum-order-by-aggregate.input';
export declare class DoctorOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    specialties?: keyof typeof SortOrder;
    divisions?: keyof typeof SortOrder;
    _count?: DoctorCountOrderByAggregateInput;
    _avg?: DoctorAvgOrderByAggregateInput;
    _max?: DoctorMaxOrderByAggregateInput;
    _min?: DoctorMinOrderByAggregateInput;
    _sum?: DoctorSumOrderByAggregateInput;
}
