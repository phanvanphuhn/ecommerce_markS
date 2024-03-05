import { queryField, nonNull, list } from 'nexus'

export const TerritoryCategorizationFindManyQuery = queryField('findManyTerritoryCategorization', {
  type: nonNull(list(nonNull('TerritoryCategorization'))),
  args: {
    where: 'TerritoryCategorizationWhereInput',
    orderBy: list('TerritoryCategorizationOrderByWithRelationInput'),
    cursor: 'TerritoryCategorizationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TerritoryCategorizationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.territoryCategorization.findMany({
      ...args,
      ...select,
    })
  },
})
