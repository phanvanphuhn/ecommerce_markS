import { queryField, list } from 'nexus'

export const TerritoryCategorizationFindFirstQuery = queryField(
  'findFirstTerritoryCategorization',
  {
    type: 'TerritoryCategorization',
    args: {
      where: 'TerritoryCategorizationWhereInput',
      orderBy: list('TerritoryCategorizationOrderByWithRelationInput'),
      cursor: 'TerritoryCategorizationWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('TerritoryCategorizationScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.territoryCategorization.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
