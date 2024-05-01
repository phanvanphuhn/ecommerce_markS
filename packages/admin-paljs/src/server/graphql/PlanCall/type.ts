import { objectType } from 'nexus'

export const PlanCall = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'PlanCall',
  definition(t) {
    t.string('uniqueIdInApp')
    t.nullable.string('salesForceId')
    t.nullable.string('subject')
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.string('description')
    t.nullable.string('location')
    t.nullable.string('account')
    t.nullable.string('contactId')
    t.nullable.string('contactName')
    t.nullable.string('division')
    t.nullable.string('activityType')
    t.nullable.string('activitySubtype')
    t.nullable.string('activityOwnerName')
    t.nullable.string('activityOwnerEmail')
    t.nullable.string('ownerCountry')
    t.nullable.string('status')
    t.nullable.field('createdInApp', { type: 'DateTime' })
    t.nullable.field('lastModifiedInApp', { type: 'DateTime' })
  },
})
