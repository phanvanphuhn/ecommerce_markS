import { queryField, nonNull, list } from 'nexus'

export const LeaderboardFindCountQuery = queryField(
  'findManyLeaderboardCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'LeaderboardWhereInput',
      orderBy: list('LeaderboardOrderByWithRelationInput'),
      cursor: 'LeaderboardWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('LeaderboardScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.leaderboard.count(args as any)
    },
  },
)
