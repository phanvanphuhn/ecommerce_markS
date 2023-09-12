import { Role } from '../prisma/role.enum';
import { UserCreateNestedOneWithoutReportingByInput } from './user-create-nested-one-without-reporting-by.input';
import { UserCreateNestedOneWithoutReportingToInput } from './user-create-nested-one-without-reporting-to.input';
import { ScheduleCreateNestedManyWithoutUserInput } from '../schedule/schedule-create-nested-many-without-user.input';
import { CaseLogCreateNestedManyWithoutAccountInput } from '../case-log/case-log-create-nested-many-without-account.input';
import { DoctorCreateNestedOneWithoutUserInput } from '../doctor/doctor-create-nested-one-without-user.input';
export declare class UserCreateWithoutProfileInput {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingTo?: UserCreateNestedOneWithoutReportingByInput;
    reportingBy?: UserCreateNestedOneWithoutReportingToInput;
    Schedule?: ScheduleCreateNestedManyWithoutUserInput;
    CaseLog?: CaseLogCreateNestedManyWithoutAccountInput;
    Doctor?: DoctorCreateNestedOneWithoutUserInput;
}
