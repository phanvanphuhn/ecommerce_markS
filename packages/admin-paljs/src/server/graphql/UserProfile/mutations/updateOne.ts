import { mutationField, nonNull } from 'nexus'

export const UserProfileUpdateOneMutation = mutationField(
  'updateOneUserProfile',
  {
    type: nonNull('UserProfile'),
    args: {
      data: nonNull('UserProfileUpdateInput'),
      where: nonNull('UserProfileWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.userProfile.update({
        where,
        data,
        ...select,
      })
    },
  },
)
