import { Prisma } from '@prisma/client';

import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutProductsInvoiceInput } from './product-create-without-products-invoice.input';
export declare class ProductCreateOrConnectWithoutProductsInvoiceInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
    create: ProductCreateWithoutProductsInvoiceInput;
}
