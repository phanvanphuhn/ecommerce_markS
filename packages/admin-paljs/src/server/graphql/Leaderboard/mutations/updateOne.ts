import { mutationField, nonNull } from 'nexus'

export const LeaderboardUpdateOneMutation = mutationField('updateOneLeaderboard', {
  type: nonNull('Leaderboard'),
  args: {
    data: nonNull('LeaderboardUpdateInput'),
    where: nonNull('LeaderboardWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.leaderboard.update({
      where,
      data,
      ...select,
    })
  },
})
