import { ProductsInvoiceWhereInput } from './products-invoice-where.input';
import { ProductsInvoiceOrderByWithAggregationInput } from './products-invoice-order-by-with-aggregation.input';
import { ProductsInvoiceScalarFieldEnum } from './products-invoice-scalar-field.enum';
import { ProductsInvoiceScalarWhereWithAggregatesInput } from './products-invoice-scalar-where-with-aggregates.input';
import { ProductsInvoiceCountAggregateInput } from './products-invoice-count-aggregate.input';
import { ProductsInvoiceMinAggregateInput } from './products-invoice-min-aggregate.input';
import { ProductsInvoiceMaxAggregateInput } from './products-invoice-max-aggregate.input';
export declare class ProductsInvoiceGroupByArgs {
    where?: ProductsInvoiceWhereInput;
    orderBy?: Array<ProductsInvoiceOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductsInvoiceScalarFieldEnum>;
    having?: ProductsInvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsInvoiceCountAggregateInput;
    _min?: ProductsInvoiceMinAggregateInput;
    _max?: ProductsInvoiceMaxAggregateInput;
}
