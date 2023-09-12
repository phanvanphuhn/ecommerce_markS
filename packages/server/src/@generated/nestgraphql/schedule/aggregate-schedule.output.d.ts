import { ScheduleCountAggregate } from './schedule-count-aggregate.output';
import { ScheduleAvgAggregate } from './schedule-avg-aggregate.output';
import { ScheduleSumAggregate } from './schedule-sum-aggregate.output';
import { ScheduleMinAggregate } from './schedule-min-aggregate.output';
import { ScheduleMaxAggregate } from './schedule-max-aggregate.output';
export declare class AggregateSchedule {
    _count?: ScheduleCountAggregate;
    _avg?: ScheduleAvgAggregate;
    _sum?: ScheduleSumAggregate;
    _min?: ScheduleMinAggregate;
    _max?: ScheduleMaxAggregate;
}
