import { HospitalCountAggregate } from './hospital-count-aggregate.output';
import { HospitalAvgAggregate } from './hospital-avg-aggregate.output';
import { HospitalSumAggregate } from './hospital-sum-aggregate.output';
import { HospitalMinAggregate } from './hospital-min-aggregate.output';
import { HospitalMaxAggregate } from './hospital-max-aggregate.output';
export declare class HospitalGroupBy {
    id: number;
    name: string;
    address: string;
    _count?: HospitalCountAggregate;
    _avg?: HospitalAvgAggregate;
    _sum?: HospitalSumAggregate;
    _min?: HospitalMinAggregate;
    _max?: HospitalMaxAggregate;
}
