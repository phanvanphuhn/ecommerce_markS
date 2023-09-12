import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductsInvoiceRelationFilter } from '../products-invoice/products-invoice-relation-filter.input';
export declare class ProductWhereInput {
    AND?: Array<ProductWhereInput>;
    OR?: Array<ProductWhereInput>;
    NOT?: Array<ProductWhereInput>;
    name?: StringFilter;
    quantity?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    productsInvoiceId?: StringFilter;
    productsInvoice?: ProductsInvoiceRelationFilter;
}
