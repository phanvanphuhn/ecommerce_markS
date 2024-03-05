import { mutationField, nonNull } from 'nexus'

export const ContactSearchUpsertOneMutation = mutationField(
  'upsertOneContactSearch',
  {
    type: nonNull('ContactSearch'),
    args: {
      where: nonNull('ContactSearchWhereUniqueInput'),
      create: nonNull('ContactSearchCreateInput'),
      update: nonNull('ContactSearchUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contactSearch.upsert({
        ...args,
        ...select,
      })
    },
  },
)
