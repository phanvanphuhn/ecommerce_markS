import { Prisma } from '@prisma/client';

import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutProductsInvoiceInput } from './product-update-without-products-invoice.input';
export declare class ProductUpdateWithWhereUniqueWithoutProductsInvoiceInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
    data: ProductUpdateWithoutProductsInvoiceInput;
}
