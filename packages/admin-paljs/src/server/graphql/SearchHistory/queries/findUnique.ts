import { queryField, nonNull } from 'nexus'

export const SearchHistoryFindUniqueQuery = queryField('findUniqueSearchHistory', {
  type: 'SearchHistory',
  args: {
    where: nonNull('SearchHistoryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.searchHistory.findUnique({
      where,
      ...select,
    })
  },
})
