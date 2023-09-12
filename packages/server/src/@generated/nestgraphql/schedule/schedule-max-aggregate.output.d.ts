import { ScheduleType } from '../prisma/schedule-type.enum';
export declare class ScheduleMaxAggregate {
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
}
