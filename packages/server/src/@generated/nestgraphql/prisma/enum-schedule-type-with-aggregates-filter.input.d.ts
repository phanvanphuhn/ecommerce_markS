import { ScheduleType } from './schedule-type.enum';
import { IntFilter } from './int-filter.input';
import { EnumScheduleTypeFilter } from './enum-schedule-type-filter.input';
export declare class EnumScheduleTypeWithAggregatesFilter {
    equals?: keyof typeof ScheduleType;
    in?: Array<keyof typeof ScheduleType>;
    notIn?: Array<keyof typeof ScheduleType>;
    not?: EnumScheduleTypeWithAggregatesFilter;
    _count?: IntFilter;
    _min?: EnumScheduleTypeFilter;
    _max?: EnumScheduleTypeFilter;
}
