import { Injectable } from '@nestjs/common';

import { Database } from '../_database/database';

import { UserProfileOutput } from './dto/user-profile.dto';

@Injectable()
export class UserProfilesService {
  constructor(private readonly database: Database) {}

  async getUserProfileByNetworkIdWithTitleCheck(
    networkId: string,
  ): Promise<UserProfileOutput[]> {
    const userRecords = await this.getUserProfileByNetworkId(networkId);

    const userRecordsWithTitle = userRecords.filter((item) =>
      item.title.toLowerCase().includes('mark_s'),
    );

    if (userRecordsWithTitle.length === 0) {
      return userRecordsWithTitle;
    }

    return userRecords;
  }

  async getUserProfileBySalesRepEmail(
    salesRepEmail: string,
  ): Promise<UserProfileOutput[]> {
    const result = await this.database
      .selectFrom('marks.UserProfile')
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .selectAll()
      .execute();

    return result.map((item) => new UserProfileOutput(item));
  }

  async getUserProfileByNetworkId(
    networkId: string,
  ): Promise<UserProfileOutput[]> {
    const result = await this.database
      .selectFrom('marks.UserProfile')
      .where('networkId', 'ilike', networkId)
      .selectAll()
      .execute();

    return result.map((item) => new UserProfileOutput(item));
  }
}
