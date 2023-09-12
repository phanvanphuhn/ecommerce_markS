import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

import { CaseLogCountOrderByAggregateInput } from './case-log-count-order-by-aggregate.input';
import { CaseLogAvgOrderByAggregateInput } from './case-log-avg-order-by-aggregate.input';
import { CaseLogMaxOrderByAggregateInput } from './case-log-max-order-by-aggregate.input';
import { CaseLogMinOrderByAggregateInput } from './case-log-min-order-by-aggregate.input';
import { CaseLogSumOrderByAggregateInput } from './case-log-sum-order-by-aggregate.input';
export declare class CaseLogOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
    photoUrl?: SortOrderInput;
    productsInvoiceId?: keyof typeof SortOrder;
    scheduleId?: keyof typeof SortOrder;
    deleted?: SortOrderInput;
    _count?: CaseLogCountOrderByAggregateInput;
    _avg?: CaseLogAvgOrderByAggregateInput;
    _max?: CaseLogMaxOrderByAggregateInput;
    _min?: CaseLogMinOrderByAggregateInput;
    _sum?: CaseLogSumOrderByAggregateInput;
}
