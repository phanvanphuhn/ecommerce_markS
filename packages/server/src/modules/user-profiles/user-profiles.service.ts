import { Injectable } from "@nestjs/common";

import { Database } from "../_database/database";

import { UserProfileOutput } from "./dto/user-profile.dto";

@Injectable()
export class UserProfilesService {
  constructor(private readonly database: Database) {}

  async getUserProfileByNetworkId(
    networkId: string
  ): Promise<UserProfileOutput[]> {
    const result = await this.database
      .selectFrom("marks.UserProfile")
      .where("networkId", "=", networkId)
      .selectAll()
      .execute();
    return result.map((item) => new UserProfileOutput(item));
  }
}
