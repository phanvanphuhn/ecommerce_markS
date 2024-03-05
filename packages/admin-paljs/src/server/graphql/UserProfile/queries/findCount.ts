import { queryField, nonNull, list } from 'nexus'

export const UserProfileFindCountQuery = queryField(
  'findManyUserProfileCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'UserProfileWhereInput',
      orderBy: list('UserProfileOrderByWithRelationInput'),
      cursor: 'UserProfileWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('UserProfileScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.userProfile.count(args as any)
    },
  },
)
