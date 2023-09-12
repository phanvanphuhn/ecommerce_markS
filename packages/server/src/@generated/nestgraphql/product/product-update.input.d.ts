import { ProductsInvoiceUpdateOneWithoutProductsNestedInput } from '../products-invoice/products-invoice-update-one-without-products-nested.input';
export declare class ProductUpdateInput {
    name?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productsInvoice?: ProductsInvoiceUpdateOneWithoutProductsNestedInput;
}
