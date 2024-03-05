import { mutationField, nonNull } from 'nexus'

export const ContactSearchCreateOneMutation = mutationField(
  'createOneContactSearch',
  {
    type: nonNull('ContactSearch'),
    args: {
      data: 'ContactSearchCreateInput',
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.contactSearch.create({
        data,
        ...select,
      })
    },
  },
)
