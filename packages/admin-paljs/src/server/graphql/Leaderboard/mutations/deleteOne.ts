import { mutationField, nonNull } from 'nexus'

export const LeaderboardDeleteOneMutation = mutationField(
  'deleteOneLeaderboard',
  {
    type: 'Leaderboard',
    args: {
      where: nonNull('LeaderboardWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.leaderboard.delete({
        where,
        ...select,
      })
    },
  },
)
