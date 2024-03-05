import { queryField, nonNull, list } from 'nexus'

export const ContactSearchFindManyQuery = queryField('findManyContactSearch', {
  type: nonNull(list(nonNull('ContactSearch'))),
  args: {
    where: 'ContactSearchWhereInput',
    orderBy: list('ContactSearchOrderByWithRelationInput'),
    cursor: 'ContactSearchWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ContactSearchScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contactSearch.findMany({
      ...args,
      ...select,
    })
  },
})
