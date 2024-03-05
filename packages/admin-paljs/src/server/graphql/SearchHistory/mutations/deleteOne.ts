import { mutationField, nonNull } from 'nexus'

export const SearchHistoryDeleteOneMutation = mutationField(
  'deleteOneSearchHistory',
  {
    type: 'SearchHistory',
    args: {
      where: nonNull('SearchHistoryWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.searchHistory.delete({
        where,
        ...select,
      })
    },
  },
)
