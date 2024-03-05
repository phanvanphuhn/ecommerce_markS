import { mutationField, nonNull } from 'nexus'

export const ContactSearchUpdateOneMutation = mutationField(
  'updateOneContactSearch',
  {
    type: nonNull('ContactSearch'),
    args: {
      data: nonNull('ContactSearchUpdateInput'),
      where: nonNull('ContactSearchWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.contactSearch.update({
        where,
        data,
        ...select,
      })
    },
  },
)
