import { AddressCountAggregate } from './address-count-aggregate.output';
import { AddressAvgAggregate } from './address-avg-aggregate.output';
import { AddressSumAggregate } from './address-sum-aggregate.output';
import { AddressMinAggregate } from './address-min-aggregate.output';
import { AddressMaxAggregate } from './address-max-aggregate.output';
export declare class AddressGroupBy {
    id: number;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: AddressCountAggregate;
    _avg?: AddressAvgAggregate;
    _sum?: AddressSumAggregate;
    _min?: AddressMinAggregate;
    _max?: AddressMaxAggregate;
}
