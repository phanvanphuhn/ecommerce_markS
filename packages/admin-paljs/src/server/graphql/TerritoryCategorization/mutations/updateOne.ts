import { mutationField, nonNull } from 'nexus'

export const TerritoryCategorizationUpdateOneMutation = mutationField('updateOneTerritoryCategorization', {
  type: nonNull('TerritoryCategorization'),
  args: {
    data: nonNull('TerritoryCategorizationUpdateInput'),
    where: nonNull('TerritoryCategorizationWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.territoryCategorization.update({
      where,
      data,
      ...select,
    })
  },
})
