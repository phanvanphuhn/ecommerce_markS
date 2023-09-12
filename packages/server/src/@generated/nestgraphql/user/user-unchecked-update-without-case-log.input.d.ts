import { Role } from '../prisma/role.enum';
import { UserUncheckedUpdateOneWithoutReportingToNestedInput } from './user-unchecked-update-one-without-reporting-to-nested.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { ScheduleUncheckedUpdateManyWithoutUserNestedInput } from '../schedule/schedule-unchecked-update-many-without-user-nested.input';
import { DoctorUncheckedUpdateOneWithoutUserNestedInput } from '../doctor/doctor-unchecked-update-one-without-user-nested.input';
export declare class UserUncheckedUpdateWithoutCaseLogInput {
    id?: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
    reportingBy?: UserUncheckedUpdateOneWithoutReportingToNestedInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    Schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput;
    Doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput;
}
