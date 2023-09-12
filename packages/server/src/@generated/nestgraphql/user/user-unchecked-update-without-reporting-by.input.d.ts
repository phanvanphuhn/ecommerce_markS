import { Role } from '../prisma/role.enum';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { ScheduleUncheckedUpdateManyWithoutUserNestedInput } from '../schedule/schedule-unchecked-update-many-without-user-nested.input';
import { CaseLogUncheckedUpdateManyWithoutAccountNestedInput } from '../case-log/case-log-unchecked-update-many-without-account-nested.input';
import { DoctorUncheckedUpdateOneWithoutUserNestedInput } from '../doctor/doctor-unchecked-update-one-without-user-nested.input';
export declare class UserUncheckedUpdateWithoutReportingByInput {
    id?: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    Schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput;
    CaseLog?: CaseLogUncheckedUpdateManyWithoutAccountNestedInput;
    Doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput;
}
