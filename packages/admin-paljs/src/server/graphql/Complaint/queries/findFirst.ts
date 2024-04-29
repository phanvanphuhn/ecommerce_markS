import { queryField, list } from 'nexus'

export const ComplaintFindFirstQuery = queryField('findFirstComplaint', {
  type: 'Complaint',
  args: {
    where: 'ComplaintWhereInput',
    orderBy: list('ComplaintOrderByWithRelationInput'),
    cursor: 'ComplaintWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ComplaintScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.complaint.findFirst({
      ...args,
      ...select,
    })
  },
})
