import { Prisma } from '@prisma/client';

import { ProductsInvoiceCreateWithoutProductsInput } from './products-invoice-create-without-products.input';
import { ProductsInvoiceCreateOrConnectWithoutProductsInput } from './products-invoice-create-or-connect-without-products.input';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
export declare class ProductsInvoiceCreateNestedOneWithoutProductsInput {
    create?: ProductsInvoiceCreateWithoutProductsInput;
    connectOrCreate?: ProductsInvoiceCreateOrConnectWithoutProductsInput;
    connect?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
}
