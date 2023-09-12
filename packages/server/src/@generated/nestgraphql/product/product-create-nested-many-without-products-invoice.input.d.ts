import { Prisma } from '@prisma/client';

import { ProductCreateWithoutProductsInvoiceInput } from './product-create-without-products-invoice.input';
import { ProductCreateOrConnectWithoutProductsInvoiceInput } from './product-create-or-connect-without-products-invoice.input';
import { ProductCreateManyProductsInvoiceInputEnvelope } from './product-create-many-products-invoice-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
export declare class ProductCreateNestedManyWithoutProductsInvoiceInput {
    create?: Array<ProductCreateWithoutProductsInvoiceInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductsInvoiceInput>;
    createMany?: ProductCreateManyProductsInvoiceInputEnvelope;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'name'>>;
}
