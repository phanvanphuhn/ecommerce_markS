import { mutationField, nonNull } from 'nexus'

export const UserProfileUpdateManyMutation = mutationField(
  'updateManyUserProfile',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('UserProfileUpdateManyMutationInput'),
      where: 'UserProfileWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.userProfile.updateMany(args as any)
    },
  },
)
