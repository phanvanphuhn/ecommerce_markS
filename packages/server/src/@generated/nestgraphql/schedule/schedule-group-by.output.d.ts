import { ScheduleType } from '../prisma/schedule-type.enum';
import { ScheduleCountAggregate } from './schedule-count-aggregate.output';
import { ScheduleAvgAggregate } from './schedule-avg-aggregate.output';
import { ScheduleSumAggregate } from './schedule-sum-aggregate.output';
import { ScheduleMinAggregate } from './schedule-min-aggregate.output';
import { ScheduleMaxAggregate } from './schedule-max-aggregate.output';
export declare class ScheduleGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    subject: string;
    location?: string;
    time?: string;
    endDate: Date | string;
    startDate: Date | string;
    scheduleType: keyof typeof ScheduleType;
    userId: number;
    deleted?: Date | string;
    _count?: ScheduleCountAggregate;
    _avg?: ScheduleAvgAggregate;
    _sum?: ScheduleSumAggregate;
    _min?: ScheduleMinAggregate;
    _max?: ScheduleMaxAggregate;
}
