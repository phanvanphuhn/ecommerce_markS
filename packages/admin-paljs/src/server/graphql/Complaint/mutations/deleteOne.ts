import { mutationField, nonNull } from 'nexus'

export const ComplaintDeleteOneMutation = mutationField('deleteOneComplaint', {
  type: 'Complaint',
  args: {
    where: nonNull('ComplaintWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.complaint.delete({
      where,
      ...select,
    })
  },
})
