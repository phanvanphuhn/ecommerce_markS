import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
export declare class ProfileCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    create: ProfileCreateWithoutUserInput;
}
