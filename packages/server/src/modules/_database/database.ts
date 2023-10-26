import { Kysely } from 'kysely';
import {
  Complaint,
  ContactSearch,
  Leaderboard,
  Sales,
  SliderAndCommission,
  TerritoryCategorization,
  UserProfile,
} from '@generated/kysely/types';

interface DB {
  'marks.ContactSearch': ContactSearch;
  'marks.Complaint': Complaint;
  'marks.UserProfile': UserProfile;
  'marks.Leaderboard': Leaderboard;
  'marks.SliderAndCommission': SliderAndCommission;
  'marks.TerritoryCategorization': TerritoryCategorization;
  'marks.Sales': Sales;
}

export class Database extends Kysely<DB> {}
