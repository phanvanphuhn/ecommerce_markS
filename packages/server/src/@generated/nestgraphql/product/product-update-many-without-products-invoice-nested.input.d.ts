import { Prisma } from '@prisma/client';

import { ProductCreateWithoutProductsInvoiceInput } from './product-create-without-products-invoice.input';
import { ProductCreateOrConnectWithoutProductsInvoiceInput } from './product-create-or-connect-without-products-invoice.input';
import { ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput } from './product-upsert-with-where-unique-without-products-invoice.input';
import { ProductCreateManyProductsInvoiceInputEnvelope } from './product-create-many-products-invoice-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutProductsInvoiceInput } from './product-update-with-where-unique-without-products-invoice.input';
import { ProductUpdateManyWithWhereWithoutProductsInvoiceInput } from './product-update-many-with-where-without-products-invoice.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';
export declare class ProductUpdateManyWithoutProductsInvoiceNestedInput {
    create?: Array<ProductCreateWithoutProductsInvoiceInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductsInvoiceInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput>;
    createMany?: ProductCreateManyProductsInvoiceInputEnvelope;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'name'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'name'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'name'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'name'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductsInvoiceInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductsInvoiceInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
