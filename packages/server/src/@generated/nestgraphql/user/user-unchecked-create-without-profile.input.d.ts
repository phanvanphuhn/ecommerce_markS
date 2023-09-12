import { Role } from '../prisma/role.enum';
import { ScheduleUncheckedCreateNestedManyWithoutUserInput } from '../schedule/schedule-unchecked-create-nested-many-without-user.input';
import { CaseLogUncheckedCreateNestedManyWithoutAccountInput } from '../case-log/case-log-unchecked-create-nested-many-without-account.input';
import { DoctorUncheckedCreateNestedOneWithoutUserInput } from '../doctor/doctor-unchecked-create-nested-one-without-user.input';

import { UserUncheckedCreateNestedOneWithoutReportingToInput } from './user-unchecked-create-nested-one-without-reporting-to.input';
export declare class UserUncheckedCreateWithoutProfileInput {
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
    reportingBy?: UserUncheckedCreateNestedOneWithoutReportingToInput;
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput;
    CaseLog?: CaseLogUncheckedCreateNestedManyWithoutAccountInput;
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput;
}
