import { Hospital } from '../hospital/hospital.model';
import { Doctor } from '../doctor/doctor.model';
export declare class HospitalToDoctor {
    hospitalId: number;
    doctorId: number;
    hospital?: Hospital;
    doctor?: Doctor;
}
