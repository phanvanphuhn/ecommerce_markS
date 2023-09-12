import { ProductsInvoiceCreateWithoutCaseLogInput } from './products-invoice-create-without-case-log.input';
import { ProductsInvoiceCreateOrConnectWithoutCaseLogInput } from './products-invoice-create-or-connect-without-case-log.input';
import { ProductsInvoiceUpsertWithoutCaseLogInput } from './products-invoice-upsert-without-case-log.input';
import { Prisma } from '@prisma/client';
import { ProductsInvoiceWhereUniqueInput } from './products-invoice-where-unique.input';
import { ProductsInvoiceUpdateToOneWithWhereWithoutCaseLogInput } from './products-invoice-update-to-one-with-where-without-case-log.input';
export declare class ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput {
    create?: ProductsInvoiceCreateWithoutCaseLogInput;
    connectOrCreate?: ProductsInvoiceCreateOrConnectWithoutCaseLogInput;
    upsert?: ProductsInvoiceUpsertWithoutCaseLogInput;
    connect?: Prisma.AtLeast<ProductsInvoiceWhereUniqueInput, 'id'>;
    update?: ProductsInvoiceUpdateToOneWithWhereWithoutCaseLogInput;
}
