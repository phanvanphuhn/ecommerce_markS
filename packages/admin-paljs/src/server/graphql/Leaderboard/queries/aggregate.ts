import { queryField, list } from 'nexus'

export const LeaderboardAggregateQuery = queryField('aggregateLeaderboard', {
  type: 'AggregateLeaderboard',
  args: {
    where: 'LeaderboardWhereInput',
    orderBy: list('LeaderboardOrderByWithRelationInput'),
    cursor: 'LeaderboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.leaderboard.aggregate({ ...args, ...select }) as any
  },
})
