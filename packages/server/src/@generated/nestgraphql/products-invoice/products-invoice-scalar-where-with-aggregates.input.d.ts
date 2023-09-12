import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class ProductsInvoiceScalarWhereWithAggregatesInput {
    AND?: Array<ProductsInvoiceScalarWhereWithAggregatesInput>;
    OR?: Array<ProductsInvoiceScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductsInvoiceScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
