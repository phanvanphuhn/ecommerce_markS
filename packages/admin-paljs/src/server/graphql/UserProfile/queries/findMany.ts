import { queryField, nonNull, list } from 'nexus'

export const UserProfileFindManyQuery = queryField('findManyUserProfile', {
  type: nonNull(list(nonNull('UserProfile'))),
  args: {
    where: 'UserProfileWhereInput',
    orderBy: list('UserProfileOrderByWithRelationInput'),
    cursor: 'UserProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserProfileScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userProfile.findMany({
      ...args,
      ...select,
    })
  },
})
