import { objectType } from 'nexus'

export const Leaderboard = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Leaderboard',
  definition(t) {
    t.string('id')
    t.nullable.string('salesRepEmail')
    t.nullable.string('fullName')
    t.nullable.string('country')
    t.nullable.string('year')
    t.nullable.string('quarter')
    t.nullable.string('month')
    t.nullable.string('targetAchievedYtd')
    t.nullable.string('rankYtd')
    t.nullable.string('targetAchievedQtd')
    t.nullable.string('rankQtd')
    t.nullable.string('targetAchievedMtd')
    t.nullable.string('rankMtd')
    t.nullable.field('lastRefreshedTimestamp', { type: 'DateTime' })
  },
})
