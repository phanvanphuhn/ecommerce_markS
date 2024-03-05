import { mutationField, nonNull } from 'nexus'

export const UserProfileUpsertOneMutation = mutationField('upsertOneUserProfile', {
  type: nonNull('UserProfile'),
  args: {
    where: nonNull('UserProfileWhereUniqueInput'),
    create: nonNull('UserProfileCreateInput'),
    update: nonNull('UserProfileUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userProfile.upsert({
      ...args,
      ...select,
    })
  },
})
