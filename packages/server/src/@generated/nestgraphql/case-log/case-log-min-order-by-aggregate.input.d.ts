import { SortOrder } from '../prisma/sort-order.enum';
export declare class CaseLogMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
    photoUrl?: keyof typeof SortOrder;
    productsInvoiceId?: keyof typeof SortOrder;
    scheduleId?: keyof typeof SortOrder;
    deleted?: keyof typeof SortOrder;
}
