import { SortOrder } from '../prisma/sort-order.enum';
export declare class ScheduleCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    subject?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    time?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    scheduleType?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deleted?: keyof typeof SortOrder;
}
