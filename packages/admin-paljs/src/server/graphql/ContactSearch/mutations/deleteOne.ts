import { mutationField, nonNull } from 'nexus'

export const ContactSearchDeleteOneMutation = mutationField('deleteOneContactSearch', {
  type: 'ContactSearch',
  args: {
    where: nonNull('ContactSearchWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.contactSearch.delete({
      where,
      ...select,
    })
  },
})
