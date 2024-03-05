import { queryField, nonNull, list } from 'nexus'

export const LeaderboardFindManyQuery = queryField('findManyLeaderboard', {
  type: nonNull(list(nonNull('Leaderboard'))),
  args: {
    where: 'LeaderboardWhereInput',
    orderBy: list('LeaderboardOrderByWithRelationInput'),
    cursor: 'LeaderboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('LeaderboardScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.leaderboard.findMany({
      ...args,
      ...select,
    })
  },
})
