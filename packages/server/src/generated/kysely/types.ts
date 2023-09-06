import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { Role, Specialty, Division, TopicsOfInterest } from './enums';

export type CaseLog = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  accountId: number;
  doctorId: number;
  photoUrl: string;
  productsInvoiceId: string;
  scheduleId: string;
};
export type Doctor = {
  id: Generated<number>;
  name: string;
  title: string;
  userId: number;
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
  country: string;
  city: string;
  division: string;
  preferredLanguage: string;
  reportingTo: string;
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
};
export type User = {
  id: Generated<number>;
  email: string;
  password: string;
  name: string | null;
  role: Generated<Role>;
};
export type DB = {
  CaseLog: CaseLog;
  Doctor: Doctor;
  PlanCall: PlanCall;
  Product: Product;
  ProductsInvoice: ProductsInvoice;
  Profile: Profile;
  Schedule: Schedule;
  User: User;
};
