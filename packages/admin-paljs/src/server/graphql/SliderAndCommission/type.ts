import { objectType } from 'nexus'

export const SliderAndCommission = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'SliderAndCommission',
  definition(t) {
    t.int('id')
    t.nullable.string('lowerBound')
    t.nullable.string('upperBound')
    t.nullable.string('variablePayoutPercentage')
    t.nullable.string('territoryCategory')
    t.nullable.string('commissionPercentage')
    t.nullable.string('year')
  },
})
