import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { Role } from './enums';

export type Post = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  published: boolean;
  title: string;
  content: string | null;
  authorId: string | null;
};
export type User = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  email: string;
  password: string;
  firstname: string | null;
  lastname: string | null;
  role: Role;
};
export type DB = {
  Post: Post;
  User: User;
};
