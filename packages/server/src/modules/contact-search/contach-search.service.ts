import { Injectable } from '@nestjs/common';
import { Expression, SqlBool } from 'kysely';
import { isEmpty } from 'class-validator';

import { Database } from '../_database/database';

import {
  ContactSearchArgs,
  ContactSearchOutput,
  HospitalFilterArgs,
} from './dto/contact-search.dto';
import { DoctorDetail } from './dto/doctor-profile.dto';

@Injectable()
export class ContactSearchService {
  constructor(private readonly database: Database) {}

  async getDoctorSearchList(
    salesRepEmail: string,
    filter: ContactSearchArgs,
  ): Promise<ContactSearchOutput[]> {
    let query = this.database
      .selectFrom('marks.ContactSearch')
      .select([
        'id',
        'doctorName',
        'doctorTitle',
        'hospital',
        'doctorDivision',
        'doctorSpecialty',
        'doctorEmail',
        'doctorPhone',
        'doctorAlternativeEmail',
        'topicsOfInterest',
      ])
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .orderBy('doctorName', 'asc')
      .groupBy([
        'id',
        'doctorName',
        'doctorTitle',
        'hospital',
        'doctorDivision',
        'doctorSpecialty',
        'doctorEmail',
        'doctorPhone',
        'doctorAlternativeEmail',
        'topicsOfInterest',
      ]);
    if (
      filter.doctorName ||
      filter.doctorTitle ||
      filter.hospital ||
      filter.doctorDivisions ||
      filter.doctorSpecialties ||
      filter.doctorAlternativeEmail ||
      filter.doctorCountry ||
      filter.topicsOfInterests
    ) {
      query = query.where((eb) => {
        const ors: Expression<SqlBool>[] = [];
        if (filter.doctorName) {
          ors.push(eb('doctorName', 'like', `%${filter.doctorName}%`));
        }
        if (filter.doctorTitle) {
          ors.push(eb('doctorTitle', 'like', `%${filter.doctorTitle}%`));
        }
        if (filter.hospital) {
          ors.push(eb('hospital', 'like', `%${filter.hospital}%`));
        }
        if (filter.doctorDivisions) {
          ors.push(eb('doctorDivision', 'in', filter.doctorDivisions));
        }
        if (filter.doctorSpecialties) {
          ors.push(eb('doctorSpecialty', 'in', filter.doctorSpecialties));
        }
        if (filter.doctorAlternativeEmail) {
          ors.push(
            eb(
              'doctorAlternativeEmail',
              'like',
              `%${filter.doctorAlternativeEmail}%`,
            ),
          );
        }
        if (filter.doctorCountry) {
          ors.push(eb('doctorCountry', 'like', `%${filter.doctorCountry}%`));
        }
        if (filter.topicsOfInterests) {
          ors.push(eb('topicsOfInterest', 'in', filter.topicsOfInterests));
        }
        return eb.or(ors);
      });
    }
    const dbResponse = await query.execute();
    return dbResponse.map((row) => new ContactSearchOutput(row));
  }

  async getFilterHospitalList(
    salesRepEmail: string,
    filter: HospitalFilterArgs,
  ): Promise<string[]> {
    let query = this.database
      .selectFrom('marks.ContactSearch')
      .select([
        'hospital',
        'doctorDivision',
        'doctorSpecialty',
        'topicsOfInterest',
      ])
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .orderBy('hospital', 'asc')
      .groupBy([
        'hospital',
        'doctorDivision',
        'doctorSpecialty',
        'topicsOfInterest',
      ]);

    if (
      filter.doctorDivisions ||
      filter.doctorSpecialties ||
      filter.topicsOfInterests
    ) {
      query = query.where((eb) => {
        const ors: Expression<SqlBool>[] = [];
        if (filter.doctorDivisions) {
          ors.push(eb('doctorDivision', 'in', filter.doctorDivisions));
        }
        if (filter.doctorSpecialties) {
          ors.push(eb('doctorSpecialty', 'in', filter.doctorSpecialties));
        }
        if (filter.topicsOfInterests) {
          ors.push(eb('topicsOfInterest', 'in', filter.topicsOfInterests));
        }
        return eb.or(ors);
      });
    }
    const dbResponse = await query.execute();

    // filter out duplicate hospital
    const hospitalSet = new Set<string>();
    dbResponse.forEach((row) => {
      if (!hospitalSet.has(row.hospital)) {
        hospitalSet.add(row.hospital);
      }
    });
    return Array.from(hospitalSet);
  }

  async getFilterSpecialtyList(salesRepEmail: string): Promise<string[]> {
    const dbResponse = await this.database
      .selectFrom('marks.ContactSearch')
      .select(['doctorSpecialty'])
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .orderBy('doctorSpecialty', 'asc')
      .groupBy(['doctorSpecialty'])
      .execute();

    return dbResponse.map((row) => row.doctorSpecialty);
  }

  async getFilterDivisionList(salesRepEmail: string): Promise<string[]> {
    const dbResponse = await this.database
      .selectFrom('marks.ContactSearch')
      .select(['doctorDivision'])
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .orderBy('doctorDivision', 'asc')
      .groupBy(['doctorDivision'])
      .execute();

    return dbResponse.map((row) => {
      if (!isEmpty(row.doctorDivision)) return row.doctorDivision;
    });
  }

  async getFilterTopicsOfInterestList(
    salesRepEmail: string,
  ): Promise<string[]> {
    const dbResponse = await this.database
      .selectFrom('marks.ContactSearch')
      .select(['topicsOfInterest'])
      .where('salesRepEmail', 'ilike', salesRepEmail)
      .orderBy('topicsOfInterest', 'asc')
      .groupBy(['topicsOfInterest'])
      .execute();

    return dbResponse.map((row) => {
      if (!isEmpty(row.topicsOfInterest)) return row.topicsOfInterest;
    });
  }

  async getDoctorProfileByDoctorEmail(
    doctorEmail: string,
  ): Promise<DoctorDetail[]> {
    const dbResponse = await this.database
      .selectFrom('marks.ContactSearch')
      .select((eb) => [
        'doctorName',
        'doctorTitle',
        'hospital',
        'doctorDivision',
        'doctorSpecialty',
        'doctorEmail',
        'doctorPhone',
        'doctorSalutation',
        'doctorAlternativeEmail',
        'topicsOfInterest',
        'doctorCountry',
      ])
      .where('doctorEmail', '=', doctorEmail)
      .groupBy([
        'doctorEmail',
        'doctorName',
        'doctorTitle',
        'doctorEmail',
        'doctorPhone',
        'doctorSalutation',
        'hospital',
        'doctorDivision',
        'doctorSpecialty',
        'doctorAlternativeEmail',
        'topicsOfInterest',
        'doctorCountry',
      ])
      .execute();

    return dbResponse as DoctorDetail[];
  }
}
