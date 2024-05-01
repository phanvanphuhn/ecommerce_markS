import { queryField, nonNull } from 'nexus'

export const SliderAndCommissionFindUniqueQuery = queryField('findUniqueSliderAndCommission', {
  type: 'SliderAndCommission',
  args: {
    where: nonNull('SliderAndCommissionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.sliderAndCommission.findUnique({
      where,
      ...select,
    })
  },
})
