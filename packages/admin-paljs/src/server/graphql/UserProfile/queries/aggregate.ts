import { queryField, list } from 'nexus'

export const UserProfileAggregateQuery = queryField('aggregateUserProfile', {
  type: 'AggregateUserProfile',
  args: {
    where: 'UserProfileWhereInput',
    orderBy: list('UserProfileOrderByWithRelationInput'),
    cursor: 'UserProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userProfile.aggregate({ ...args, ...select }) as any
  },
})
