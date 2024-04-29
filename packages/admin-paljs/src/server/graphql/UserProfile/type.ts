import { objectType } from 'nexus'

export const UserProfile = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'UserProfile',
  definition(t) {
    t.int('id')
    t.nullable.string('salesRepEmail')
    t.nullable.string('fullName')
    t.nullable.string('country')
    t.nullable.string('division')
    t.nullable.string('reportingTo')
    t.nullable.string('networkId')
    t.nullable.string('personId')
    t.nullable.string('title')
  },
})
