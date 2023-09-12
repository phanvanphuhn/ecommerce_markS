import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutProfileInput {
    update: UserUpdateWithoutProfileInput;
    create: UserCreateWithoutProfileInput;
    where?: UserWhereInput;
}
