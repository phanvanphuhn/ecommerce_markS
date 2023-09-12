import { HospitalUpdateOneRequiredWithoutDoctorsNestedInput } from '../hospital/hospital-update-one-required-without-doctors-nested.input';
import { DoctorUpdateOneRequiredWithoutHospitalsNestedInput } from '../doctor/doctor-update-one-required-without-hospitals-nested.input';
export declare class HospitalToDoctorUpdateInput {
    hospital?: HospitalUpdateOneRequiredWithoutDoctorsNestedInput;
    doctor?: DoctorUpdateOneRequiredWithoutHospitalsNestedInput;
}
