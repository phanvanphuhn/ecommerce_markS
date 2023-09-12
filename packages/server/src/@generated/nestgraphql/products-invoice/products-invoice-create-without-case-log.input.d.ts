import { ProductCreateNestedManyWithoutProductsInvoiceInput } from '../product/product-create-nested-many-without-products-invoice.input';
export declare class ProductsInvoiceCreateWithoutCaseLogInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutProductsInvoiceInput;
}
