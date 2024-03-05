import { queryField, nonNull, list } from 'nexus'

export const ContactSearchFindCountQuery = queryField('findManyContactSearchCount', {
  type: nonNull('Int'),
  args: {
    where: 'ContactSearchWhereInput',
    orderBy: list('ContactSearchOrderByWithRelationInput'),
    cursor: 'ContactSearchWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ContactSearchScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contactSearch.count(args as any)
  },
})
