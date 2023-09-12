import { Role } from '../prisma/role.enum';
import { UserCreateNestedOneWithoutReportingToInput } from './user-create-nested-one-without-reporting-to.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { ScheduleCreateNestedManyWithoutUserInput } from '../schedule/schedule-create-nested-many-without-user.input';
import { CaseLogCreateNestedManyWithoutAccountInput } from '../case-log/case-log-create-nested-many-without-account.input';
import { DoctorCreateNestedOneWithoutUserInput } from '../doctor/doctor-create-nested-one-without-user.input';
export declare class UserCreateWithoutReportingToInput {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingBy?: UserCreateNestedOneWithoutReportingToInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    Schedule?: ScheduleCreateNestedManyWithoutUserInput;
    CaseLog?: CaseLogCreateNestedManyWithoutAccountInput;
    Doctor?: DoctorCreateNestedOneWithoutUserInput;
}
