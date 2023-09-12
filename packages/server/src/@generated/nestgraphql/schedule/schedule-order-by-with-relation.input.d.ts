import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PlanCallOrderByWithRelationInput } from '../plan-call/plan-call-order-by-with-relation.input';
import { CaseLogOrderByWithRelationInput } from '../case-log/case-log-order-by-with-relation.input';
export declare class ScheduleOrderByWithRelationInput {
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
    user?: UserOrderByWithRelationInput;
    planCall?: PlanCallOrderByWithRelationInput;
    caseLog?: CaseLogOrderByWithRelationInput;
}
