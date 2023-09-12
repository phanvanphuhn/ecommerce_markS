import { ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput } from '../product/product-unchecked-update-many-without-products-invoice-nested.input';
import { CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput } from '../case-log/case-log-unchecked-update-one-without-products-invoice-nested.input';
export declare class ProductsInvoiceUncheckedUpdateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput;
    caseLog?: CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput;
}
