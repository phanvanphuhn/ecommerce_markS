import { queryField, list } from 'nexus'

export const SearchHistoryFindFirstQuery = queryField('findFirstSearchHistory', {
  type: 'SearchHistory',
  args: {
    where: 'SearchHistoryWhereInput',
    orderBy: list('SearchHistoryOrderByWithRelationInput'),
    cursor: 'SearchHistoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SearchHistoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.searchHistory.findFirst({
      ...args,
      ...select,
    })
  },
})
