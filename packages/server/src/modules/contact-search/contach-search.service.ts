import { Injectable } from '@nestjs/common';
import { Expression, SqlBool } from 'kysely';
import { isEmpty } from 'class-validator';

import { Database } from '../_database/database';

import {
  ContactSearchArgs,
  ContactSearchOutput,
  HospitalFilterArgs,
} from './dto/contact-search.dto';
import { DoctorDetail, DoctorFilterArgs } from './dto/doctor-profile.dto';

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
        'contactId',
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
        'contactId',
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
          ors.push(eb('doctorName', 'ilike', `%${filter.doctorName}%`));
        }
        if (filter.doctorTitle) {
          ors.push(eb('doctorTitle', 'ilike', `%${filter.doctorTitle}%`));
        }
        if (filter.hospital) {
          ors.push(eb('hospital', 'ilike', `%${filter.hospital}%`));
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
          ors.push(eb('doctorCountry', 'ilike', `%${filter.doctorCountry}%`));
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

    return dbResponse.map((row) => {
      if (!isEmpty(row.doctorSpecialty)) return row.doctorSpecialty;
      return '';
    });
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
      return '';
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

    const result =
      dbResponse.map((row) => {
        if (!isEmpty(row.topicsOfInterest)) return row.topicsOfInterest;
        return '';
      }) || [];

    return result;
  }

  async getDoctorProfileByContactId(
    salesRepEmail: string,
    contactId: string,
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
        'contactId',
      ])
      .where('contactId', '=', contactId)
      .where('salesRepEmail', 'ilike', salesRepEmail)
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
        'contactId',
      ])
      .execute();

    return dbResponse as DoctorDetail[];
  }

  async getDoctorProfile(
    salesRepEmail: string,
    filter: DoctorFilterArgs,
  ): Promise<DoctorDetail[]> {
    let query = this.database
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
      ]);

    if (filter.doctorName) {
      query = query.where('doctorName', 'like', `%${filter.doctorName}%`);
    }

    if (filter.doctorPhone) {
      query = query.where('doctorPhone', 'like', `%${filter.doctorPhone}%`);
    }

    if (filter.doctorEmail) {
      query = query.where('doctorEmail', 'like', `%${filter.doctorEmail}%`);
    }

    query = query.where('salesRepEmail', 'ilike', salesRepEmail);

    const result = await query.execute();

    return result as DoctorDetail[];
  }
}
