import { queryField, nonNull } from 'nexus'

export const ContactSearchFindUniqueQuery = queryField('findUniqueContactSearch', {
  type: 'ContactSearch',
  args: {
    where: nonNull('ContactSearchWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.contactSearch.findUnique({
      where,
      ...select,
    })
  },
})
