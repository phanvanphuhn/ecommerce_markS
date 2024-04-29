import { objectType } from 'nexus'

export const ContactSearch = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ContactSearch',
  definition(t) {
    t.int('id')
    t.nullable.string('salesRepEmail')
    t.nullable.string('hospital')
    t.nullable.string('topicsOfInterest')
    t.nullable.string('contactId')
    t.nullable.string('doctorName')
    t.nullable.string('doctorEmail')
    t.nullable.string('doctorAlternativeEmail')
    t.nullable.string('doctorDivision')
    t.nullable.string('doctorProfilePhoto')
    t.nullable.string('doctorSpecialty')
    t.nullable.string('doctorSalutation')
    t.nullable.string('doctorTitle')
    t.nullable.string('doctorPhone')
    t.nullable.string('doctorCountry')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})
