import { objectType } from 'nexus'

export const Complaint = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Complaint',
  definition(t) {
    t.string('id')
    t.nullable.string('complaintId')
    t.nullable.string('salesRepEmail')
    t.nullable.string('complaintName')
    t.nullable.string('complaintStatus')
    t.nullable.field('eventDate', { type: 'DateTime' })
    t.nullable.field('createdDate', { type: 'DateTime' })
    t.nullable.string('complaintTitle')
    t.nullable.string('division')
    t.nullable.string('country')
    t.nullable.field('awareDate', { type: 'DateTime' })
    t.nullable.string('timeOfEvent')
    t.nullable.string('typeOfSituationReporting')
    t.nullable.string('accName')
    t.nullable.string('procedureType')
    t.nullable.field('procedureDate', { type: 'DateTime' })
    t.nullable.string('treatedFor')
    t.nullable.string('procedureOutcome')
    t.nullable.string('reasonsForUnsuccessfulProcedure')
  },
})
