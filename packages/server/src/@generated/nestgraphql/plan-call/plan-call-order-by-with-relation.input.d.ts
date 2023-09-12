import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ScheduleOrderByWithRelationInput } from '../schedule/schedule-order-by-with-relation.input';
export declare class PlanCallOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    outcome?: SortOrderInput;
    type?: SortOrderInput;
    description?: SortOrderInput;
    topics?: SortOrderInput;
    scheduleId?: keyof typeof SortOrder;
    deleted?: SortOrderInput;
    schedule?: ScheduleOrderByWithRelationInput;
}
