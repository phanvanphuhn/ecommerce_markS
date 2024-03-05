import { queryField, list } from 'nexus'

export const SliderAndCommissionAggregateQuery = queryField('aggregateSliderAndCommission', {
  type: 'AggregateSliderAndCommission',
  args: {
    where: 'SliderAndCommissionWhereInput',
    orderBy: list('SliderAndCommissionOrderByWithRelationInput'),
    cursor: 'SliderAndCommissionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sliderAndCommission.aggregate({ ...args, ...select }) as any
  },
})
