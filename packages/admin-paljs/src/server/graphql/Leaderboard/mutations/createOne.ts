import { mutationField, nonNull } from 'nexus'

export const LeaderboardCreateOneMutation = mutationField(
  'createOneLeaderboard',
  {
    type: nonNull('Leaderboard'),
    args: {
      data: 'LeaderboardCreateInput',
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.leaderboard.create({
        data,
        ...select,
      })
    },
  },
)
