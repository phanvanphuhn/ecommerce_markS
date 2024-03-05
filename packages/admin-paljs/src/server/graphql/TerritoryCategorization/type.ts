import { objectType } from 'nexus'

export const TerritoryCategorization = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TerritoryCategorization',
  definition(t) {
    t.int('id')
    t.nullable.string('lowerBound')
    t.nullable.string('upperBound')
    t.nullable.string('territoryCategory')
    t.nullable.string('year')
  },
})
