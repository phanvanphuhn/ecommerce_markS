import { HospitalCreateNestedOneWithoutDoctorsInput } from '../hospital/hospital-create-nested-one-without-doctors.input';
import { DoctorCreateNestedOneWithoutHospitalsInput } from '../doctor/doctor-create-nested-one-without-hospitals.input';
export declare class HospitalToDoctorCreateInput {
    hospital: HospitalCreateNestedOneWithoutDoctorsInput;
    doctor: DoctorCreateNestedOneWithoutHospitalsInput;
}
