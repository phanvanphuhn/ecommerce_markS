import { SortOrder } from '../prisma/sort-order.enum';
import { ProductsInvoiceCountOrderByAggregateInput } from './products-invoice-count-order-by-aggregate.input';
import { ProductsInvoiceMaxOrderByAggregateInput } from './products-invoice-max-order-by-aggregate.input';
import { ProductsInvoiceMinOrderByAggregateInput } from './products-invoice-min-order-by-aggregate.input';
export declare class ProductsInvoiceOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: ProductsInvoiceCountOrderByAggregateInput;
    _max?: ProductsInvoiceMaxOrderByAggregateInput;
    _min?: ProductsInvoiceMinOrderByAggregateInput;
}
