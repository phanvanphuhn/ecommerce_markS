import { UserUpdateWithoutScheduleInput } from './user-update-without-schedule.input';
import { UserCreateWithoutScheduleInput } from './user-create-without-schedule.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutScheduleInput {
    update: UserUpdateWithoutScheduleInput;
    create: UserCreateWithoutScheduleInput;
    where?: UserWhereInput;
}
