import { HospitalToDoctorCountAggregate } from './hospital-to-doctor-count-aggregate.output';
import { HospitalToDoctorAvgAggregate } from './hospital-to-doctor-avg-aggregate.output';
import { HospitalToDoctorSumAggregate } from './hospital-to-doctor-sum-aggregate.output';
import { HospitalToDoctorMinAggregate } from './hospital-to-doctor-min-aggregate.output';
import { HospitalToDoctorMaxAggregate } from './hospital-to-doctor-max-aggregate.output';
export declare class HospitalToDoctorGroupBy {
    hospitalId: number;
    doctorId: number;
    _count?: HospitalToDoctorCountAggregate;
    _avg?: HospitalToDoctorAvgAggregate;
    _sum?: HospitalToDoctorSumAggregate;
    _min?: HospitalToDoctorMinAggregate;
    _max?: HospitalToDoctorMaxAggregate;
}
