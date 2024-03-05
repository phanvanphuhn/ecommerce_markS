import { queryField, list } from 'nexus'

export const TerritoryCategorizationAggregateQuery = queryField(
  'aggregateTerritoryCategorization',
  {
    type: 'AggregateTerritoryCategorization',
    args: {
      where: 'TerritoryCategorizationWhereInput',
      orderBy: list('TerritoryCategorizationOrderByWithRelationInput'),
      cursor: 'TerritoryCategorizationWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.territoryCategorization.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
