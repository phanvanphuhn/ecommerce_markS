import { CaseLogUncheckedCreateNestedOneWithoutProductsInvoiceInput } from '../case-log/case-log-unchecked-create-nested-one-without-products-invoice.input';
export declare class ProductsInvoiceUncheckedCreateWithoutProductsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caseLog?: CaseLogUncheckedCreateNestedOneWithoutProductsInvoiceInput;
}
