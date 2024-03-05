import { queryField, nonNull, list } from 'nexus'

export const TerritoryCategorizationFindCountQuery = queryField('findManyTerritoryCategorizationCount', {
  type: nonNull('Int'),
  args: {
    where: 'TerritoryCategorizationWhereInput',
    orderBy: list('TerritoryCategorizationOrderByWithRelationInput'),
    cursor: 'TerritoryCategorizationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TerritoryCategorizationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.territoryCategorization.count(args as any)
  },
})
