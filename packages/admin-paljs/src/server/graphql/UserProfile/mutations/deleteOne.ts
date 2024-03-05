import { mutationField, nonNull } from 'nexus'

export const UserProfileDeleteOneMutation = mutationField(
  'deleteOneUserProfile',
  {
    type: 'UserProfile',
    args: {
      where: nonNull('UserProfileWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.userProfile.delete({
        where,
        ...select,
      })
    },
  },
)
