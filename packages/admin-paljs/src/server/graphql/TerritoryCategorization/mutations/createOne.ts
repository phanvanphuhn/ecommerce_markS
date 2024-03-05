import { mutationField, nonNull } from 'nexus'

export const TerritoryCategorizationCreateOneMutation = mutationField('createOneTerritoryCategorization', {
  type: nonNull('TerritoryCategorization'),
  args: {
    data: 'TerritoryCategorizationCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.territoryCategorization.create({
      data,
      ...select,
    })
  },
})
