import { ProductsInvoiceCreateWithoutProductsInput } from './products-invoice-create-without-products.input';
import { ProductsInvoiceCreateOrConnectWithoutProductsInput } from './products-invoice-create-or-connect-without-products.input';
import { ProductsInvoiceUpsertWithoutProductsInput } from './products-invoice-upsert-without-products.input';
import { ProductsInvoiceWhereInput } from './products-invoice-where.input';
import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput } from './products-invoice-update-to-one-with-where-without-products.input';
export declare class ProductsInvoiceUpdateOneWithoutProductsNestedInput {
    create?: ProductsInvoiceCreateWithoutProductsInput;
    connectOrCreate?: ProductsInvoiceCreateOrConnectWithoutProductsInput;
    upsert?: ProductsInvoiceUpsertWithoutProductsInput;
    disconnect?: ProductsInvoiceWhereInput;
    delete?: ProductsInvoiceWhereInput;
    connect?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    update?: ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput;
}
