import { queryField, list } from 'nexus'

export const SliderAndCommissionFindFirstQuery = queryField('findFirstSliderAndCommission', {
  type: 'SliderAndCommission',
  args: {
    where: 'SliderAndCommissionWhereInput',
    orderBy: list('SliderAndCommissionOrderByWithRelationInput'),
    cursor: 'SliderAndCommissionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SliderAndCommissionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sliderAndCommission.findFirst({
      ...args,
      ...select,
    })
  },
})
