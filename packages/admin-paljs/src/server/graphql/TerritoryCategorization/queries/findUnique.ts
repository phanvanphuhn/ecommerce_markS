import { queryField, nonNull } from 'nexus'

export const TerritoryCategorizationFindUniqueQuery = queryField('findUniqueTerritoryCategorization', {
  type: 'TerritoryCategorization',
  args: {
    where: nonNull('TerritoryCategorizationWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.territoryCategorization.findUnique({
      where,
      ...select,
    })
  },
})
