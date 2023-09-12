import { Role } from '../prisma/role.enum';
import { UserCreateNestedOneWithoutReportingByInput } from './user-create-nested-one-without-reporting-by.input';
import { UserCreateNestedOneWithoutReportingToInput } from './user-create-nested-one-without-reporting-to.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { ScheduleCreateNestedManyWithoutUserInput } from '../schedule/schedule-create-nested-many-without-user.input';
import { DoctorCreateNestedOneWithoutUserInput } from '../doctor/doctor-create-nested-one-without-user.input';
export declare class UserCreateWithoutCaseLogInput {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingTo?: UserCreateNestedOneWithoutReportingByInput;
    reportingBy?: UserCreateNestedOneWithoutReportingToInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    Schedule?: ScheduleCreateNestedManyWithoutUserInput;
    Doctor?: DoctorCreateNestedOneWithoutUserInput;
}
