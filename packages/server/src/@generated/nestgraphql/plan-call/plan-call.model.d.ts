import { Schedule } from '../schedule/schedule.model';
export declare class PlanCall {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    outcome: string | null;
    type: string | null;
    description: string | null;
    topics: string | null;
    scheduleId: string;
    deleted: Date | null;
    schedule?: Schedule;
}
