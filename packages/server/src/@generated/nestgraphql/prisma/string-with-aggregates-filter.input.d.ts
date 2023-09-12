import { QueryMode } from './query-mode.enum';
import { IntFilter } from './int-filter.input';
import { StringFilter } from './string-filter.input';
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: StringWithAggregatesFilter;
    _count?: IntFilter;
    _min?: StringFilter;
    _max?: StringFilter;
}
