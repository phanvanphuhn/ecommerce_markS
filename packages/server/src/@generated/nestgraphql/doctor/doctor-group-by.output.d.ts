import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';

import { DoctorCountAggregate } from './doctor-count-aggregate.output';
import { DoctorAvgAggregate } from './doctor-avg-aggregate.output';
import { DoctorSumAggregate } from './doctor-sum-aggregate.output';
import { DoctorMinAggregate } from './doctor-min-aggregate.output';
import { DoctorMaxAggregate } from './doctor-max-aggregate.output';
export declare class DoctorGroupBy {
    id: number;
    title: string;
    userId: number;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    _count?: DoctorCountAggregate;
    _avg?: DoctorAvgAggregate;
    _sum?: DoctorSumAggregate;
    _min?: DoctorMinAggregate;
    _max?: DoctorMaxAggregate;
}
