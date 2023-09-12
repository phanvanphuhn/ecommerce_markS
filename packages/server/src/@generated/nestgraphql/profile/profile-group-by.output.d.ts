import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';
export declare class ProfileGroupBy {
    id: number;
    mobile: string;
    addressId?: number;
    preferredLanguage: string;
    userId: number;
    _count?: ProfileCountAggregate;
    _avg?: ProfileAvgAggregate;
    _sum?: ProfileSumAggregate;
    _min?: ProfileMinAggregate;
    _max?: ProfileMaxAggregate;
}
