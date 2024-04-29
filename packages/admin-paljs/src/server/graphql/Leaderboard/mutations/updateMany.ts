import { mutationField, nonNull } from 'nexus'

export const LeaderboardUpdateManyMutation = mutationField('updateManyLeaderboard', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('LeaderboardUpdateManyMutationInput'),
    where: 'LeaderboardWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.leaderboard.updateMany(args as any)
  },
})
