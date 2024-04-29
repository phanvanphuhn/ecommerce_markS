import { queryField, nonNull } from 'nexus'

export const LeaderboardFindUniqueQuery = queryField('findUniqueLeaderboard', {
  type: 'Leaderboard',
  args: {
    where: nonNull('LeaderboardWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.leaderboard.findUnique({
      where,
      ...select,
    })
  },
})
