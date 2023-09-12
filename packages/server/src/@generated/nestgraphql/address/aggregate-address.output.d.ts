import { AddressCountAggregate } from './address-count-aggregate.output';
import { AddressAvgAggregate } from './address-avg-aggregate.output';
import { AddressSumAggregate } from './address-sum-aggregate.output';
import { AddressMinAggregate } from './address-min-aggregate.output';
import { AddressMaxAggregate } from './address-max-aggregate.output';
export declare class AggregateAddress {
    _count?: AddressCountAggregate;
    _avg?: AddressAvgAggregate;
    _sum?: AddressSumAggregate;
    _min?: AddressMinAggregate;
    _max?: AddressMaxAggregate;
}
