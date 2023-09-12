import { SortOrder } from '../prisma/sort-order.enum';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { CaseLogOrderByWithRelationInput } from '../case-log/case-log-order-by-with-relation.input';
export declare class ProductsInvoiceOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    products?: ProductOrderByRelationAggregateInput;
    caseLog?: CaseLogOrderByWithRelationInput;
}
