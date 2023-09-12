import { HospitalToDoctor } from '../hospital-to-doctor/hospital-to-doctor.model';
import { HospitalCount } from './hospital-count.output';
export declare class Hospital {
    id: number;
    name: string;
    address: string;
    doctors?: Array<HospitalToDoctor>;
    _count?: HospitalCount;
}
