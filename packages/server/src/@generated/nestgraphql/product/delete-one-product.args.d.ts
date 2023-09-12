import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
export declare class DeleteOneProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'name'>;
}
