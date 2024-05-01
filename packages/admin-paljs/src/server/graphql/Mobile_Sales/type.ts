import { objectType } from 'nexus'

export const Mobile_Sales = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Mobile_Sales',
  definition(t) {
    t.int('id')
    t.nullable.string('salesRepEmail')
    t.nullable.string('targetByQuarter')
    t.nullable.string('targetByYear')
    t.nullable.string('quarter')
    t.nullable.string('year')
    t.field('type', { type: 'mobileSalesTargetType' })
  },
})
