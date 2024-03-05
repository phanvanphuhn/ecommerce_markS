import { mutationField, nonNull } from 'nexus'

export const SliderAndCommissionDeleteManyMutation = mutationField(
  'deleteManySliderAndCommission',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SliderAndCommissionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.sliderAndCommission.deleteMany({ where } as any)
    },
  },
)
