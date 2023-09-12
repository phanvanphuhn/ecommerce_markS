import { ScheduleType } from './schedule-type.enum';
export declare class EnumScheduleTypeFilter {
    equals?: keyof typeof ScheduleType;
    in?: Array<keyof typeof ScheduleType>;
    notIn?: Array<keyof typeof ScheduleType>;
    not?: EnumScheduleTypeFilter;
}
