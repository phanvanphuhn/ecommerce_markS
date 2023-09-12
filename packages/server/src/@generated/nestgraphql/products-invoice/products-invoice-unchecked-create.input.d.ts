import { ProductUncheckedCreateNestedManyWithoutProductsInvoiceInput } from '../product/product-unchecked-create-nested-many-without-products-invoice.input';
import { CaseLogUncheckedCreateNestedOneWithoutProductsInvoiceInput } from '../case-log/case-log-unchecked-create-nested-one-without-products-invoice.input';
export declare class ProductsInvoiceUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutProductsInvoiceInput;
    caseLog?: CaseLogUncheckedCreateNestedOneWithoutProductsInvoiceInput;
}
