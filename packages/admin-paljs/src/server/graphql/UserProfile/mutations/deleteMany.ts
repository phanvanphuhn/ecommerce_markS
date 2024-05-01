import { mutationField, nonNull } from 'nexus'

export const UserProfileDeleteManyMutation = mutationField('deleteManyUserProfile', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserProfileWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.userProfile.deleteMany({ where } as any)
  },
})
