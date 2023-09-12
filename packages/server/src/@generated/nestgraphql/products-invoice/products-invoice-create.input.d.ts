import { ProductCreateNestedManyWithoutProductsInvoiceInput } from '../product/product-create-nested-many-without-products-invoice.input';
import { CaseLogCreateNestedOneWithoutProductsInvoiceInput } from '../case-log/case-log-create-nested-one-without-products-invoice.input';
export declare class ProductsInvoiceCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutProductsInvoiceInput;
    caseLog?: CaseLogCreateNestedOneWithoutProductsInvoiceInput;
}
