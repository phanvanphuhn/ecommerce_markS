import { SortOrder } from '../prisma/sort-order.enum';
export declare class ProductCountOrderByAggregateInput {
    name?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    productsInvoiceId?: keyof typeof SortOrder;
}
