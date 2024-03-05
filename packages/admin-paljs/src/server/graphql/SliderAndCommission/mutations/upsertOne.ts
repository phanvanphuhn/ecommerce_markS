import { mutationField, nonNull } from 'nexus'

export const SliderAndCommissionUpsertOneMutation = mutationField(
  'upsertOneSliderAndCommission',
  {
    type: nonNull('SliderAndCommission'),
    args: {
      where: nonNull('SliderAndCommissionWhereUniqueInput'),
      create: nonNull('SliderAndCommissionCreateInput'),
      update: nonNull('SliderAndCommissionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.sliderAndCommission.upsert({
        ...args,
        ...select,
      })
    },
  },
)
