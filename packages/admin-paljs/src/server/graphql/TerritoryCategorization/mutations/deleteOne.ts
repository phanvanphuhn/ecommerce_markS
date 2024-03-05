import { mutationField, nonNull } from 'nexus'

export const TerritoryCategorizationDeleteOneMutation = mutationField(
  'deleteOneTerritoryCategorization',
  {
    type: 'TerritoryCategorization',
    args: {
      where: nonNull('TerritoryCategorizationWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.territoryCategorization.delete({
        where,
        ...select,
      })
    },
  },
)
