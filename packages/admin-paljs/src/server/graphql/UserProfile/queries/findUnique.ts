import { queryField, nonNull } from 'nexus'

export const UserProfileFindUniqueQuery = queryField('findUniqueUserProfile', {
  type: 'UserProfile',
  args: {
    where: nonNull('UserProfileWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.userProfile.findUnique({
      where,
      ...select,
    })
  },
})
