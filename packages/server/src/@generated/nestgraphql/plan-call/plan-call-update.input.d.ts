import { ScheduleUpdateOneRequiredWithoutPlanCallNestedInput } from '../schedule/schedule-update-one-required-without-plan-call-nested.input';
export declare class PlanCallUpdateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    outcome?: string;
    type?: string;
    description?: string;
    topics?: string;
    deleted?: Date | string;
    schedule?: ScheduleUpdateOneRequiredWithoutPlanCallNestedInput;
}
