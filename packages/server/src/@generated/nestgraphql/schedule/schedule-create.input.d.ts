import { ScheduleType } from '../prisma/schedule-type.enum';
import { UserCreateNestedOneWithoutScheduleInput } from '../user/user-create-nested-one-without-schedule.input';
import { PlanCallCreateNestedOneWithoutScheduleInput } from '../plan-call/plan-call-create-nested-one-without-schedule.input';
import { CaseLogCreateNestedOneWithoutScheduleInput } from '../case-log/case-log-create-nested-one-without-schedule.input';
export declare class ScheduleCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: string;
    location?: string;
    time?: string;
    endDate: Date | string;
    startDate: Date | string;
    scheduleType: keyof typeof ScheduleType;
    deleted?: Date | string;
    user: UserCreateNestedOneWithoutScheduleInput;
    planCall?: PlanCallCreateNestedOneWithoutScheduleInput;
    caseLog?: CaseLogCreateNestedOneWithoutScheduleInput;
}
