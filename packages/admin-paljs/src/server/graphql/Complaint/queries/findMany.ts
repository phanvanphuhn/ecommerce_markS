import { queryField, nonNull, list } from 'nexus'

export const ComplaintFindManyQuery = queryField('findManyComplaint', {
  type: nonNull(list(nonNull('Complaint'))),
  args: {
    where: 'ComplaintWhereInput',
    orderBy: list('ComplaintOrderByWithRelationInput'),
    cursor: 'ComplaintWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ComplaintScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.complaint.findMany({
      ...args,
      ...select,
    })
  },
})
