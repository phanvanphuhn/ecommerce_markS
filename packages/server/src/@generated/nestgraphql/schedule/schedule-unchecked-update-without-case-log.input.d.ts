import { ScheduleType } from '../prisma/schedule-type.enum';
import { PlanCallUncheckedUpdateOneWithoutScheduleNestedInput } from '../plan-call/plan-call-unchecked-update-one-without-schedule-nested.input';
export declare class ScheduleUncheckedUpdateWithoutCaseLogInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject?: string;
    location?: string;
    time?: string;
    endDate?: Date | string;
    startDate?: Date | string;
    scheduleType?: keyof typeof ScheduleType;
    userId?: number;
    deleted?: Date | string;
    planCall?: PlanCallUncheckedUpdateOneWithoutScheduleNestedInput;
}
