import { ProductsInvoiceCountAggregate } from './products-invoice-count-aggregate.output';
import { ProductsInvoiceMinAggregate } from './products-invoice-min-aggregate.output';
import { ProductsInvoiceMaxAggregate } from './products-invoice-max-aggregate.output';
export declare class ProductsInvoiceGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: ProductsInvoiceCountAggregate;
    _min?: ProductsInvoiceMinAggregate;
    _max?: ProductsInvoiceMaxAggregate;
}
