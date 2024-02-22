import {RoleType} from 'common/Constants';

export interface UserRegisterProps {
  username: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
}
export interface Role {
  id: string;
  name: RoleType;
  createdAt: string;
  updatedAt: string;
  isDel: boolean;
}
export interface UserCustomer {
  id: string;
  name: string;
  phone: string;
  email: string;
  userId: string;
  user: UserProfile;
}
export interface Permission {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDel: boolean;
}

export interface Bank {
  isDefault: boolean;
  bankAccountId: string;
  bankAccountName: string;
  bankName: string;
}

interface LeaderBoard {
  country: string;
  fullName: string;
  month: string;
  rankMtd: string;
  rankYtd: string;
  salesRepEmail: string;
  targetAchievedMtd: string;
  targetAchievedQtd: string;
  targetAchievedYtd: string;
  year: string;
}
export interface UserProfile {
  country: string;
  division: string;
  fullName: string;
  id: number;
  reportingTo: string;
  salesRepEmail: string;
  title: string;
  leaderboard: LeaderBoard;
}
