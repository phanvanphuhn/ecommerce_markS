import { queryField, list } from 'nexus'

export const ContactSearchAggregateQuery = queryField(
  'aggregateContactSearch',
  {
    type: 'AggregateContactSearch',
    args: {
      where: 'ContactSearchWhereInput',
      orderBy: list('ContactSearchOrderByWithRelationInput'),
      cursor: 'ContactSearchWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contactSearch.aggregate({ ...args, ...select }) as any
    },
  },
)
