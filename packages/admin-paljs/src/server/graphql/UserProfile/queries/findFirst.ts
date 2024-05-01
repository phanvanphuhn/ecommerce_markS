import { queryField, list } from 'nexus'

export const UserProfileFindFirstQuery = queryField('findFirstUserProfile', {
  type: 'UserProfile',
  args: {
    where: 'UserProfileWhereInput',
    orderBy: list('UserProfileOrderByWithRelationInput'),
    cursor: 'UserProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserProfileScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userProfile.findFirst({
      ...args,
      ...select,
    })
  },
})
