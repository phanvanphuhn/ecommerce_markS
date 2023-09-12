import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
export declare class ProfileUncheckedCreateNestedOneWithoutUserInput {
    create?: ProfileCreateWithoutUserInput;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
