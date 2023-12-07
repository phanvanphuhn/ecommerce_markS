import { Kysely } from 'kysely';
import {
  CaseLog,
  Complaint,
  ContactSearch,
  Leaderboard,
  Mobile_Sales,
  PlanCall,
  Products,
  Sales,
  SearchHistory,
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
  'marks.Mobile_Sales': Mobile_Sales;
  'marks.PlanCall': PlanCall;
  'marks.CaseLog': CaseLog;
  'marks.SearchHistory': SearchHistory;
  'marks.Products': Products;
}

export class Database extends Kysely<DB> {}
