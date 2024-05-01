import { queryField, nonNull, list } from 'nexus'

export const ComplaintFindCountQuery = queryField('findManyComplaintCount', {
  type: nonNull('Int'),
  args: {
    where: 'ComplaintWhereInput',
    orderBy: list('ComplaintOrderByWithRelationInput'),
    cursor: 'ComplaintWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ComplaintScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.complaint.count(args as any)
  },
})
