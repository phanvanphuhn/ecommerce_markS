import { mutationField, nonNull } from 'nexus'

export const SearchHistoryDeleteManyMutation = mutationField('deleteManySearchHistory', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SearchHistoryWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.searchHistory.deleteMany({ where } as any)
  },
})
