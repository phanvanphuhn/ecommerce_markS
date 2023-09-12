import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
export declare class FindUniqueProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
}
