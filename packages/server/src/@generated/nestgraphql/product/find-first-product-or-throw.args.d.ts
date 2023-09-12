import { Prisma } from '@prisma/client';

import { ProductWhereInput } from './product-where.input';
import { ProductOrderByWithRelationInput } from './product-order-by-with-relation.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductScalarFieldEnum } from './product-scalar-field.enum';
export declare class FindFirstProductOrThrowArgs {
    where?: ProductWhereInput;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
