import { mutationField, nonNull } from 'nexus'

export const TerritoryCategorizationUpdateManyMutation = mutationField(
  'updateManyTerritoryCategorization',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('TerritoryCategorizationUpdateManyMutationInput'),
      where: 'TerritoryCategorizationWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.territoryCategorization.updateMany(args as any)
    },
  },
)
