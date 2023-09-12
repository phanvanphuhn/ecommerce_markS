import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    name?: StringWithAggregatesFilter;
    quantity?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    productsInvoiceId?: StringWithAggregatesFilter;
}
