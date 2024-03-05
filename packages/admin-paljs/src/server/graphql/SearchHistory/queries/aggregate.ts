import { queryField, list } from 'nexus'

export const SearchHistoryAggregateQuery = queryField(
  'aggregateSearchHistory',
  {
    type: 'AggregateSearchHistory',
    args: {
      where: 'SearchHistoryWhereInput',
      orderBy: list('SearchHistoryOrderByWithRelationInput'),
      cursor: 'SearchHistoryWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.searchHistory.aggregate({ ...args, ...select }) as any
    },
  },
)
