import { Role } from '../prisma/role.enum';
import { UserUncheckedUpdateOneWithoutReportingToNestedInput } from './user-unchecked-update-one-without-reporting-to-nested.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { ScheduleUncheckedUpdateManyWithoutUserNestedInput } from '../schedule/schedule-unchecked-update-many-without-user-nested.input';
import { CaseLogUncheckedUpdateManyWithoutAccountNestedInput } from '../case-log/case-log-unchecked-update-many-without-account-nested.input';
import { DoctorUncheckedUpdateOneWithoutUserNestedInput } from '../doctor/doctor-unchecked-update-one-without-user-nested.input';
export declare class UserUncheckedUpdateWithoutReportingToInput {
    id?: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingBy?: UserUncheckedUpdateOneWithoutReportingToNestedInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    Schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput;
    CaseLog?: CaseLogUncheckedUpdateManyWithoutAccountNestedInput;
    Doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput;
}
