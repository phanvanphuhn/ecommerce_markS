import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { ScheduleUncheckedCreateNestedManyWithoutUserInput } from '../schedule/schedule-unchecked-create-nested-many-without-user.input';
import { CaseLogUncheckedCreateNestedManyWithoutAccountInput } from '../case-log/case-log-unchecked-create-nested-many-without-account.input';
import { DoctorUncheckedCreateNestedOneWithoutUserInput } from '../doctor/doctor-unchecked-create-nested-one-without-user.input';
export declare class UserUncheckedCreateWithoutReportingByInput {
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput;
    CaseLog?: CaseLogUncheckedCreateNestedManyWithoutAccountInput;
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput;
}
