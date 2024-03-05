import { queryField, list } from 'nexus'

export const ComplaintAggregateQuery = queryField('aggregateComplaint', {
  type: 'AggregateComplaint',
  args: {
    where: 'ComplaintWhereInput',
    orderBy: list('ComplaintOrderByWithRelationInput'),
    cursor: 'ComplaintWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.complaint.aggregate({ ...args, ...select }) as any
  },
})
