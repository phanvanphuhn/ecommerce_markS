import { mutationField, nonNull } from 'nexus'

export const SearchHistoryUpsertOneMutation = mutationField(
  'upsertOneSearchHistory',
  {
    type: nonNull('SearchHistory'),
    args: {
      where: nonNull('SearchHistoryWhereUniqueInput'),
      create: nonNull('SearchHistoryCreateInput'),
      update: nonNull('SearchHistoryUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.searchHistory.upsert({
        ...args,
        ...select,
      })
    },
  },
)
