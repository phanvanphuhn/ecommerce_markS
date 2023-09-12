import { Product } from '../product/product.model';
import { CaseLog } from '../case-log/case-log.model';
import { ProductsInvoiceCount } from './products-invoice-count.output';
export declare class ProductsInvoice {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    products?: Array<Product>;
    caseLog?: CaseLog | null;
    _count?: ProductsInvoiceCount;
}
