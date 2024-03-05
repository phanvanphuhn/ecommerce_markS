import { mutationField, nonNull } from 'nexus'

export const ComplaintUpdateOneMutation = mutationField('updateOneComplaint', {
  type: nonNull('Complaint'),
  args: {
    data: nonNull('ComplaintUpdateInput'),
    where: nonNull('ComplaintWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.complaint.update({
      where,
      data,
      ...select,
    })
  },
})
