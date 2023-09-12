import { Prisma } from '@prisma/client';

import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutProductsInvoiceInput } from './product-update-without-products-invoice.input';
import { ProductCreateWithoutProductsInvoiceInput } from './product-create-without-products-invoice.input';
export declare class ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
    update: ProductUpdateWithoutProductsInvoiceInput;
    create: ProductCreateWithoutProductsInvoiceInput;
}
