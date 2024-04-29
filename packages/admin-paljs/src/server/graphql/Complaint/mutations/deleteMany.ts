import { mutationField, nonNull } from 'nexus'

export const ComplaintDeleteManyMutation = mutationField('deleteManyComplaint', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ComplaintWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.complaint.deleteMany({ where } as any)
  },
})
