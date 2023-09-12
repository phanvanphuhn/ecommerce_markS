import { SortOrder } from '../prisma/sort-order.enum';
import { HospitalCountOrderByAggregateInput } from './hospital-count-order-by-aggregate.input';
import { HospitalAvgOrderByAggregateInput } from './hospital-avg-order-by-aggregate.input';
import { HospitalMaxOrderByAggregateInput } from './hospital-max-order-by-aggregate.input';
import { HospitalMinOrderByAggregateInput } from './hospital-min-order-by-aggregate.input';
import { HospitalSumOrderByAggregateInput } from './hospital-sum-order-by-aggregate.input';
export declare class HospitalOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    _count?: HospitalCountOrderByAggregateInput;
    _avg?: HospitalAvgOrderByAggregateInput;
    _max?: HospitalMaxOrderByAggregateInput;
    _min?: HospitalMinOrderByAggregateInput;
    _sum?: HospitalSumOrderByAggregateInput;
}
