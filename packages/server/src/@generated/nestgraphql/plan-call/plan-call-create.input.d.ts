import { ScheduleCreateNestedOneWithoutPlanCallInput } from '../schedule/schedule-create-nested-one-without-plan-call.input';
export declare class PlanCallCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    outcome?: string;
    type?: string;
    description?: string;
    topics?: string;
    deleted?: Date | string;
    schedule: ScheduleCreateNestedOneWithoutPlanCallInput;
}
