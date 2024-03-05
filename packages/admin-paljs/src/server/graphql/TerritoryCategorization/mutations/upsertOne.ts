import { mutationField, nonNull } from 'nexus'

export const TerritoryCategorizationUpsertOneMutation = mutationField('upsertOneTerritoryCategorization', {
  type: nonNull('TerritoryCategorization'),
  args: {
    where: nonNull('TerritoryCategorizationWhereUniqueInput'),
    create: nonNull('TerritoryCategorizationCreateInput'),
    update: nonNull('TerritoryCategorizationUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.territoryCategorization.upsert({
      ...args,
      ...select,
    })
  },
})
