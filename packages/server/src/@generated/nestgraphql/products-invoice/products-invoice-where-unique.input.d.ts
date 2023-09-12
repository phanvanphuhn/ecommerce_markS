import { ProductsInvoiceWhereInput } from './products-invoice-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { CaseLogRelationFilter } from '../case-log/case-log-relation-filter.input';
export declare class ProductsInvoiceWhereUniqueInput {
    id?: string;
    AND?: Array<ProductsInvoiceWhereInput>;
    OR?: Array<ProductsInvoiceWhereInput>;
    NOT?: Array<ProductsInvoiceWhereInput>;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    products?: ProductListRelationFilter;
    caseLog?: CaseLogRelationFilter;
}
