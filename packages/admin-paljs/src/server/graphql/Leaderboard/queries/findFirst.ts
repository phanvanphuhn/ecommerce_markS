import { queryField, list } from 'nexus'

export const LeaderboardFindFirstQuery = queryField('findFirstLeaderboard', {
  type: 'Leaderboard',
  args: {
    where: 'LeaderboardWhereInput',
    orderBy: list('LeaderboardOrderByWithRelationInput'),
    cursor: 'LeaderboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('LeaderboardScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.leaderboard.findFirst({
      ...args,
      ...select,
    })
  },
})
