import { ProductsInvoiceWhereInput } from './products-invoice-where.input';
import { ProductsInvoiceOrderByWithRelationInput } from './products-invoice-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceCountAggregateInput } from './products-invoice-count-aggregate.input';
import { ProductsInvoiceMinAggregateInput } from './products-invoice-min-aggregate.input';
import { ProductsInvoiceMaxAggregateInput } from './products-invoice-max-aggregate.input';
export declare class ProductsInvoiceAggregateArgs {
    where?: ProductsInvoiceWhereInput;
    orderBy?: Array<ProductsInvoiceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: ProductsInvoiceCountAggregateInput;
    _min?: ProductsInvoiceMinAggregateInput;
    _max?: ProductsInvoiceMaxAggregateInput;
}
