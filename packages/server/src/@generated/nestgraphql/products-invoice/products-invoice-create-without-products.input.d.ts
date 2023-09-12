import { CaseLogCreateNestedOneWithoutProductsInvoiceInput } from '../case-log/case-log-create-nested-one-without-products-invoice.input';
export declare class ProductsInvoiceCreateWithoutProductsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caseLog?: CaseLogCreateNestedOneWithoutProductsInvoiceInput;
}
