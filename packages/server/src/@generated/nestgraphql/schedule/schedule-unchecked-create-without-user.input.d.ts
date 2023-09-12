import { ScheduleType } from '../prisma/schedule-type.enum';
import { PlanCallUncheckedCreateNestedOneWithoutScheduleInput } from '../plan-call/plan-call-unchecked-create-nested-one-without-schedule.input';
import { CaseLogUncheckedCreateNestedOneWithoutScheduleInput } from '../case-log/case-log-unchecked-create-nested-one-without-schedule.input';
export declare class ScheduleUncheckedCreateWithoutUserInput {
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
    planCall?: PlanCallUncheckedCreateNestedOneWithoutScheduleInput;
    caseLog?: CaseLogUncheckedCreateNestedOneWithoutScheduleInput;
}
