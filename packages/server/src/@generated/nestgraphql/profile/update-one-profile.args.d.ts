import { Prisma } from '@prisma/client';

import { ProfileUpdateInput } from './profile-update.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
export declare class UpdateOneProfileArgs {
    data: ProfileUpdateInput;
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
