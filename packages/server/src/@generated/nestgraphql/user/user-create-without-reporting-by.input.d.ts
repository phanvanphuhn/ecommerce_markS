import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { ScheduleCreateNestedManyWithoutUserInput } from '../schedule/schedule-create-nested-many-without-user.input';
import { CaseLogCreateNestedManyWithoutAccountInput } from '../case-log/case-log-create-nested-many-without-account.input';
import { DoctorCreateNestedOneWithoutUserInput } from '../doctor/doctor-create-nested-one-without-user.input';

import { UserCreateNestedOneWithoutReportingByInput } from './user-create-nested-one-without-reporting-by.input';
export declare class UserCreateWithoutReportingByInput {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingTo?: UserCreateNestedOneWithoutReportingByInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    Schedule?: ScheduleCreateNestedManyWithoutUserInput;
    CaseLog?: CaseLogCreateNestedManyWithoutAccountInput;
    Doctor?: DoctorCreateNestedOneWithoutUserInput;
}
