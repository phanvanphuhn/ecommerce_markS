import { Role } from '../prisma/role.enum';
import { UserUpdateOneWithoutReportingToNestedInput } from './user-update-one-without-reporting-to-nested.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { ScheduleUpdateManyWithoutUserNestedInput } from '../schedule/schedule-update-many-without-user-nested.input';
import { CaseLogUpdateManyWithoutAccountNestedInput } from '../case-log/case-log-update-many-without-account-nested.input';
import { DoctorUpdateOneWithoutUserNestedInput } from '../doctor/doctor-update-one-without-user-nested.input';
export declare class UserUpdateWithoutReportingToInput {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingBy?: UserUpdateOneWithoutReportingToNestedInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    Schedule?: ScheduleUpdateManyWithoutUserNestedInput;
    CaseLog?: CaseLogUpdateManyWithoutAccountNestedInput;
    Doctor?: DoctorUpdateOneWithoutUserNestedInput;
}
