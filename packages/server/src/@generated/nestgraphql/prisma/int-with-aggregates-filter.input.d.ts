import { IntFilter } from './int-filter.input';
import { FloatFilter } from './float-filter.input';
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: IntWithAggregatesFilter;
    _count?: IntFilter;
    _avg?: FloatFilter;
    _sum?: IntFilter;
    _min?: IntFilter;
    _max?: IntFilter;
}
