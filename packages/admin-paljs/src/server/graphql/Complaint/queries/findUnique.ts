import { queryField, nonNull } from 'nexus'

export const ComplaintFindUniqueQuery = queryField('findUniqueComplaint', {
  type: 'Complaint',
  args: {
    where: nonNull('ComplaintWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.complaint.findUnique({
      where,
      ...select,
    })
  },
})
