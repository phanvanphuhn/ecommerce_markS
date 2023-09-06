import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { Role, Specialty, Division, TopicsOfInterest } from './enums';

export type Address = {
  id: Generated<number>;
  street: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
};
export type CaseLog = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  accountId: number;
  doctorId: number;
  photoUrl: string;
  productsInvoiceId: string;
  scheduleId: string;
  deleted: Timestamp | null;
};
export type Doctor = {
  id: Generated<number>;
  title: string;
  userId: number;
  specialties: Specialty[];
  divisions: Division[];
};
export type Hospital = {
  id: Generated<number>;
  name: string;
  address: string;
};
export type HospitalToDoctor = {
  hospitalId: number;
  doctorId: number;
};
export type PlanCall = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  outcome: string | null;
  type: string | null;
  description: string | null;
  topics: string | null;
  scheduleId: string;
  deleted: Timestamp | null;
};
export type Product = {
  name: string;
  quantity: number;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  productsInvoiceId: string | null;
};
export type ProductsInvoice = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
};
export type Profile = {
  id: Generated<number>;
  mobile: string;
  addressId: number | null;
  preferredLanguage: string;
  userId: number;
};
export type Schedule = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  subject: string;
  location: string | null;
  time: string | null;
  endDate: Timestamp;
  startDate: Timestamp;
  userId: number;
  deleted: Timestamp | null;
};
export type User = {
  id: Generated<number>;
  email: string;
  password: string;
  firstName: string | null;
  lastName: string | null;
  role: Generated<Role>;
  reportingToId: number | null;
};
export type DB = {
  Address: Address;
  CaseLog: CaseLog;
  Doctor: Doctor;
  Hospital: Hospital;
  HospitalToDoctor: HospitalToDoctor;
  PlanCall: PlanCall;
  Product: Product;
  ProductsInvoice: ProductsInvoice;
  Profile: Profile;
  Schedule: Schedule;
  User: User;
};
