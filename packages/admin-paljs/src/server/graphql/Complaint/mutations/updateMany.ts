import { mutationField, nonNull } from 'nexus'

export const ComplaintUpdateManyMutation = mutationField(
  'updateManyComplaint',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ComplaintUpdateManyMutationInput'),
      where: 'ComplaintWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.complaint.updateMany(args as any)
    },
  },
)
