import { Role } from '../prisma/role.enum';
import { UserUncheckedCreateNestedOneWithoutReportingToInput } from './user-unchecked-create-nested-one-without-reporting-to.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { CaseLogUncheckedCreateNestedManyWithoutAccountInput } from '../case-log/case-log-unchecked-create-nested-many-without-account.input';
import { DoctorUncheckedCreateNestedOneWithoutUserInput } from '../doctor/doctor-unchecked-create-nested-one-without-user.input';
export declare class UserUncheckedCreateWithoutScheduleInput {
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
    reportingBy?: UserUncheckedCreateNestedOneWithoutReportingToInput;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    CaseLog?: CaseLogUncheckedCreateNestedManyWithoutAccountInput;
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput;
}
