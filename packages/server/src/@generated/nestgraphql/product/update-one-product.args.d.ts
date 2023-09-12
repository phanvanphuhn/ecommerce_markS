import { ProductUpdateInput } from './product-update.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
export declare class UpdateOneProductArgs {
    data: ProductUpdateInput;
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
}
