import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { ScheduleUncheckedCreateNestedManyWithoutUserInput } from '../schedule/schedule-unchecked-create-nested-many-without-user.input';
import { DoctorUncheckedCreateNestedOneWithoutUserInput } from '../doctor/doctor-unchecked-create-nested-one-without-user.input';

import { UserUncheckedCreateNestedOneWithoutReportingToInput } from './user-unchecked-create-nested-one-without-reporting-to.input';
export declare class UserUncheckedCreateWithoutCaseLogInput {
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
    reportingBy?: UserUncheckedCreateNestedOneWithoutReportingToInput;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput;
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput;
}
