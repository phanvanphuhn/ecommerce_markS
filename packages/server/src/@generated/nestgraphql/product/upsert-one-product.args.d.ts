import { Prisma } from '@prisma/client';

import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateInput } from './product-create.input';
import { ProductUpdateInput } from './product-update.input';
export declare class UpsertOneProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
    create: ProductCreateInput;
    update: ProductUpdateInput;
}
