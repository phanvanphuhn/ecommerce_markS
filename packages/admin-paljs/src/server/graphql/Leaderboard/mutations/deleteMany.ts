import { mutationField, nonNull } from 'nexus'

export const LeaderboardDeleteManyMutation = mutationField(
  'deleteManyLeaderboard',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'LeaderboardWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.leaderboard.deleteMany({ where } as any)
    },
  },
)
