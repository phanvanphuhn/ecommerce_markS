import { mutationField, nonNull } from 'nexus'

export const LeaderboardUpsertOneMutation = mutationField(
  'upsertOneLeaderboard',
  {
    type: nonNull('Leaderboard'),
    args: {
      where: nonNull('LeaderboardWhereUniqueInput'),
      create: nonNull('LeaderboardCreateInput'),
      update: nonNull('LeaderboardUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.leaderboard.upsert({
        ...args,
        ...select,
      })
    },
  },
)
