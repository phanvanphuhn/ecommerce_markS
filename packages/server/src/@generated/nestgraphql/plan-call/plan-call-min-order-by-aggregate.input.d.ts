import { SortOrder } from '../prisma/sort-order.enum';
export declare class PlanCallMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    outcome?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    topics?: keyof typeof SortOrder;
    scheduleId?: keyof typeof SortOrder;
    deleted?: keyof typeof SortOrder;
}
