import { ProductsInvoiceCreateNestedOneWithoutProductsInput } from '../products-invoice/products-invoice-create-nested-one-without-products.input';
export declare class ProductCreateInput {
    name: string;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productsInvoice?: ProductsInvoiceCreateNestedOneWithoutProductsInput;
}
