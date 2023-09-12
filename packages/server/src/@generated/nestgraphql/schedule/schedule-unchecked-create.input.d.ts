import { ScheduleType } from '../prisma/schedule-type.enum';
import { PlanCallUncheckedCreateNestedOneWithoutScheduleInput } from '../plan-call/plan-call-unchecked-create-nested-one-without-schedule.input';
import { CaseLogUncheckedCreateNestedOneWithoutScheduleInput } from '../case-log/case-log-unchecked-create-nested-one-without-schedule.input';
export declare class ScheduleUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: string;
    location?: string;
    time?: string;
    endDate: Date | string;
    startDate: Date | string;
    scheduleType: keyof typeof ScheduleType;
    userId: number;
    deleted?: Date | string;
    planCall?: PlanCallUncheckedCreateNestedOneWithoutScheduleInput;
    caseLog?: CaseLogUncheckedCreateNestedOneWithoutScheduleInput;
}
