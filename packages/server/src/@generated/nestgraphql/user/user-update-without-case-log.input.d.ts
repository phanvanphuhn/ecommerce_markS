import { Role } from '../prisma/role.enum';
import { UserUpdateOneWithoutReportingByNestedInput } from './user-update-one-without-reporting-by-nested.input';
import { UserUpdateOneWithoutReportingToNestedInput } from './user-update-one-without-reporting-to-nested.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { ScheduleUpdateManyWithoutUserNestedInput } from '../schedule/schedule-update-many-without-user-nested.input';
import { DoctorUpdateOneWithoutUserNestedInput } from '../doctor/doctor-update-one-without-user-nested.input';
export declare class UserUpdateWithoutCaseLogInput {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingTo?: UserUpdateOneWithoutReportingByNestedInput;
    reportingBy?: UserUpdateOneWithoutReportingToNestedInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    Schedule?: ScheduleUpdateManyWithoutUserNestedInput;
    Doctor?: DoctorUpdateOneWithoutUserNestedInput;
}
