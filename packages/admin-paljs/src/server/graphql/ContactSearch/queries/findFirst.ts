import { queryField, list } from 'nexus'

export const ContactSearchFindFirstQuery = queryField('findFirstContactSearch', {
  type: 'ContactSearch',
  args: {
    where: 'ContactSearchWhereInput',
    orderBy: list('ContactSearchOrderByWithRelationInput'),
    cursor: 'ContactSearchWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ContactSearchScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contactSearch.findFirst({
      ...args,
      ...select,
    })
  },
})
