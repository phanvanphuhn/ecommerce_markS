import { ScheduleType } from '../prisma/schedule-type.enum';
import { UserUpdateOneRequiredWithoutScheduleNestedInput } from '../user/user-update-one-required-without-schedule-nested.input';
import { PlanCallUpdateOneWithoutScheduleNestedInput } from '../plan-call/plan-call-update-one-without-schedule-nested.input';
export declare class ScheduleUpdateWithoutCaseLogInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject?: string;
    location?: string;
    time?: string;
    endDate?: Date | string;
    startDate?: Date | string;
    scheduleType?: keyof typeof ScheduleType;
    deleted?: Date | string;
    user?: UserUpdateOneRequiredWithoutScheduleNestedInput;
    planCall?: PlanCallUpdateOneWithoutScheduleNestedInput;
}
