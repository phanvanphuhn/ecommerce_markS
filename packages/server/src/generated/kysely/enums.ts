export const Role = {
  DOCTOR: 'DOCTOR',
  USER: 'USER',
} as const;
export type Role = (typeof Role)[keyof typeof Role];
export const Specialty = {
  Orthopedics: 'Orthopedics',
  Surgery: 'Surgery',
  Urology: 'Urology',
  Pediatrics: 'Pediatrics',
  Cardiology: 'Cardiology',
  Neurosurgery: 'Neurosurgery',
  Neurology: 'Neurology',
  Dermatology: 'Dermatology',
  Radiology: 'Radiology',
} as const;
export type Specialty = (typeof Specialty)[keyof typeof Specialty];
export const Division = {
  Endoscopy: 'Endoscopy',
  Neuromodulation: 'Neuromodulation',
  Interventional_Cardiology: 'Interventional_Cardiology',
  Peripheral_Intervention: 'Peripheral_Intervention',
  Cardiac_Rhythm_Management: 'Cardiac_Rhythm_Management',
  Urology_And_Pelvic_Health: 'Urology_And_Pelvic_Health',
} as const;
export type Division = (typeof Division)[keyof typeof Division];
export const TopicsOfInterest = {
  Endoscopy: 'Endoscopy',
  Neuromodulation: 'Neuromodulation',
  Interventional_Cardiology: 'Interventional_Cardiology',
  Peripheral_Intervention: 'Peripheral_Intervention',
  Cardiac_Rhythm_Management: 'Cardiac_Rhythm_Management',
  Urology_And_Pelvic_Health: 'Urology_And_Pelvic_Health',
} as const;
export type TopicsOfInterest =
  (typeof TopicsOfInterest)[keyof typeof TopicsOfInterest];
