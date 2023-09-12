import { IntFilter } from './int-filter.input';
import { DateTimeFilter } from './date-time-filter.input';
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: DateTimeWithAggregatesFilter;
    _count?: IntFilter;
    _min?: DateTimeFilter;
    _max?: DateTimeFilter;
}
