import { Injectable } from "@nestjs/common";
import { Expression, Sql, SqlBool } from "kysely";

import { Database } from "../_database/database";

import {
  ContactSearchArgs,
  ContactSearchOutput,
} from "./dto/contact-search.dto";
import { DoctorDetail } from "./dto/doctor-profile.dto";

@Injectable()
export class ContactSearchService {
  constructor(private readonly database: Database) {}

  async getDoctorSearchList(
    filter: ContactSearchArgs
  ): Promise<ContactSearchOutput[]> {
    let query = this.database
      .selectFrom("marks.ContactSearch")
      .select([
        "id",
        "doctorName",
        "doctorTitle",
        "hospital",
        "doctorDivision",
        "doctorSpecialty",
        "doctorEmail",
        "doctorPhone",
      ])
      .where("networkId", "=", filter.networkId)
      .orderBy("doctorName", "asc")
      .groupBy([
        "id",
        "doctorName",
        "doctorTitle",
        "hospital",
        "doctorDivision",
        "doctorSpecialty",
        "doctorEmail",
        "doctorPhone",
      ]);

    if (
      filter.doctorName ||
      filter.doctorTitle ||
      filter.hospital ||
      filter.doctorDivision ||
      filter.doctorSpecialty
    ) {
      query = query.where((eb) => {
        const ors: Expression<SqlBool>[] = [];

        if (filter.doctorName) {
          ors.push(eb("doctorName", "like", `%${filter.doctorName}%`));
        }

        if (filter.doctorTitle) {
          ors.push(eb("doctorTitle", "like", `%${filter.doctorTitle}%`));
        }

        if (filter.hospital) {
          ors.push(eb("hospital", "like", `%${filter.hospital}%`));
        }

        if (filter.doctorDivision) {
          ors.push(eb("doctorDivision", "like", `%${filter.doctorDivision}%`));
        }

        if (filter.doctorSpecialty) {
          ors.push(
            eb("doctorSpecialty", "like", `%${filter.doctorSpecialty}%`)
          );
        }

        return eb.or(ors);
      });
    }

    const dbResponse = await query.execute();

    return dbResponse.map((row) => new ContactSearchOutput(row));
  }

  async getFilterHospitalList(networkId: string): Promise<string[]> {
    const dbResponse = await this.database
      .selectFrom("marks.ContactSearch")
      .select(["hospital"])
      .where("networkId", "=", networkId)
      .orderBy("hospital", "asc")
      .groupBy(["hospital"])
      .execute();

    return dbResponse.map((row) => row.hospital);
  }

  async getFilterSpecialtyList(networkId: string): Promise<string[]> {
    const dbResponse = await this.database
      .selectFrom("marks.ContactSearch")
      .select(["doctorSpecialty"])
      .where("networkId", "=", networkId)
      .orderBy("doctorSpecialty", "asc")
      .groupBy(["doctorSpecialty"])
      .execute();

    return dbResponse.map((row) => row.doctorSpecialty);
  }

  async getFilterDivisionList(networkId: string): Promise<string[]> {
    const dbResponse = await this.database
      .selectFrom("marks.ContactSearch")
      .select(["doctorDivision"])
      .where("networkId", "=", networkId)
      .orderBy("doctorDivision", "asc")
      .groupBy(["doctorDivision"])
      .execute();

    return dbResponse.map((row) => row.doctorDivision);
  }

  async getDoctorProfileByDoctorEmail(
    doctorEmail: string
  ): Promise<DoctorDetail> {
    const dbResponse = await this.database
      .selectFrom("marks.ContactSearch")
      .select([
        "id",
        "doctorName",
        "doctorTitle",
        "hospital",
        "doctorDivision",
        "doctorSpecialty",
        "doctorEmail",
        "doctorPhone",
      ])
      .where("doctorEmail", "=", doctorEmail)
      .executeTakeFirst();

    return dbResponse as DoctorDetail;
  }
}
