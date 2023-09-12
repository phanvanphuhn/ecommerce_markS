import { ProductUpdateManyWithoutProductsInvoiceNestedInput } from '../product/product-update-many-without-products-invoice-nested.input';
import { CaseLogUpdateOneWithoutProductsInvoiceNestedInput } from '../case-log/case-log-update-one-without-products-invoice-nested.input';
export declare class ProductsInvoiceUpdateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUpdateManyWithoutProductsInvoiceNestedInput;
    caseLog?: CaseLogUpdateOneWithoutProductsInvoiceNestedInput;
}
