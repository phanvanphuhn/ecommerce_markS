import { mutationField, nonNull } from 'nexus'

export const SearchHistoryUpdateManyMutation = mutationField(
  'updateManySearchHistory',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('SearchHistoryUpdateManyMutationInput'),
      where: 'SearchHistoryWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.searchHistory.updateMany(args as any)
    },
  },
)
