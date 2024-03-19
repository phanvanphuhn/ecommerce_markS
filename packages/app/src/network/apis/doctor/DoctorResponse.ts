export interface ItemOptionResponse {
  id: string;
  name: string;
  isSelected?: boolean;
}

export interface IDoctorSearchList {
  doctorAlternativeEmail: string;
  doctorCountry: string;
  doctorDivision: string;
  division: string[];
  specialty: string[];
  topics: string[];
  doctorEmail: string;
  doctorName: string;
  doctorPhone: string;
  doctorSpecialty: string;
  doctorTitle: string;
  hospital: string;
  id: number;
  topicsOfInterest: string;
  contactId: string;
}
