import { Kysely } from 'kysely';
import {
  Complaint,
  ContactSearch,
  Leaderboard,
  UserProfile,
} from '@generated/kysely/types';

interface DB {
  'marks.ContactSearch': ContactSearch;
  'marks.Complaint': Complaint;
  'marks.UserProfile': UserProfile;
  'marks.Leaderboard': Leaderboard;
}

export class Database extends Kysely<DB> {}
