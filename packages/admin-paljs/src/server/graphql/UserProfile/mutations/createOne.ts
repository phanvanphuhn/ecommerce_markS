import { mutationField, nonNull } from 'nexus'

export const UserProfileCreateOneMutation = mutationField(
  'createOneUserProfile',
  {
    type: nonNull('UserProfile'),
    args: {
      data: 'UserProfileCreateInput',
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.userProfile.create({
        data,
        ...select,
      })
    },
  },
)
