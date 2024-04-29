import { queryField, nonNull, list } from 'nexus'

export const SearchHistoryFindManyQuery = queryField('findManySearchHistory', {
  type: nonNull(list(nonNull('SearchHistory'))),
  args: {
    where: 'SearchHistoryWhereInput',
    orderBy: list('SearchHistoryOrderByWithRelationInput'),
    cursor: 'SearchHistoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SearchHistoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.searchHistory.findMany({
      ...args,
      ...select,
    })
  },
})
