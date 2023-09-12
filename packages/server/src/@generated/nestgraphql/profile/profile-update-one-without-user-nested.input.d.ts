import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutUserInput } from './profile-update-to-one-with-where-without-user.input';
export declare class ProfileUpdateOneWithoutUserNestedInput {
    create?: ProfileCreateWithoutUserInput;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput;
    delete?: ProfileWhereInput;
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    update?: ProfileUpdateToOneWithWhereWithoutUserInput;
}
