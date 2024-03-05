import { queryField, nonNull, list } from 'nexus'

export const SearchHistoryFindCountQuery = queryField(
  'findManySearchHistoryCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'SearchHistoryWhereInput',
      orderBy: list('SearchHistoryOrderByWithRelationInput'),
      cursor: 'SearchHistoryWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SearchHistoryScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.searchHistory.count(args as any)
    },
  },
)
