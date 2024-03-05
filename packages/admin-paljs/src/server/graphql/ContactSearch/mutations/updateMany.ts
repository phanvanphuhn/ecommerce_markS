import { mutationField, nonNull } from 'nexus'

export const ContactSearchUpdateManyMutation = mutationField(
  'updateManyContactSearch',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ContactSearchUpdateManyMutationInput'),
      where: 'ContactSearchWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.contactSearch.updateMany(args as any)
    },
  },
)
