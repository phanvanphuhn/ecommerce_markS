import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ProductScalarWhereInput {
    AND?: Array<ProductScalarWhereInput>;
    OR?: Array<ProductScalarWhereInput>;
    NOT?: Array<ProductScalarWhereInput>;
    name?: StringFilter;
    quantity?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    productsInvoiceId?: StringFilter;
}
