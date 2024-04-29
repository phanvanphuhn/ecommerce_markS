import { mutationField, nonNull } from 'nexus'

export const ContactSearchDeleteManyMutation = mutationField('deleteManyContactSearch', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ContactSearchWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.contactSearch.deleteMany({ where } as any)
  },
})
