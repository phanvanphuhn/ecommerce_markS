import { ProductsInvoice } from '../products-invoice/products-invoice.model';
export declare class Product {
    name: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    productsInvoiceId: string | null;
    productsInvoice?: ProductsInvoice | null;
}
