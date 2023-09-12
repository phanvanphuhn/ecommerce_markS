import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductsInvoiceOrderByWithRelationInput } from '../products-invoice/products-invoice-order-by-with-relation.input';
export declare class ProductOrderByWithRelationInput {
    name?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    productsInvoiceId?: SortOrderInput;
    productsInvoice?: ProductsInvoiceOrderByWithRelationInput;
}
