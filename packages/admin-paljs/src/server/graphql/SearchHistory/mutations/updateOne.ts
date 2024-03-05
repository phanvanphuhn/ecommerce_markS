import { mutationField, nonNull } from 'nexus'

export const SearchHistoryUpdateOneMutation = mutationField('updateOneSearchHistory', {
  type: nonNull('SearchHistory'),
  args: {
    data: nonNull('SearchHistoryUpdateInput'),
    where: nonNull('SearchHistoryWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.searchHistory.update({
      where,
      data,
      ...select,
    })
  },
})
