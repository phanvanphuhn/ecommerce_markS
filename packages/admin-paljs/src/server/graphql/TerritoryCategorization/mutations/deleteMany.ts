import { mutationField, nonNull } from 'nexus'

export const TerritoryCategorizationDeleteManyMutation = mutationField('deleteManyTerritoryCategorization', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TerritoryCategorizationWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.territoryCategorization.deleteMany({ where } as any)
  },
})
