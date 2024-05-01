import { mutationField, nonNull } from 'nexus'

export const SearchHistoryCreateOneMutation = mutationField('createOneSearchHistory', {
  type: nonNull('SearchHistory'),
  args: {
    data: 'SearchHistoryCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.searchHistory.create({
      data,
      ...select,
    })
  },
})
