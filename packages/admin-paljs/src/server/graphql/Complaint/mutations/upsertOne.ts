import { mutationField, nonNull } from 'nexus'

export const ComplaintUpsertOneMutation = mutationField('upsertOneComplaint', {
  type: nonNull('Complaint'),
  args: {
    where: nonNull('ComplaintWhereUniqueInput'),
    create: nonNull('ComplaintCreateInput'),
    update: nonNull('ComplaintUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.complaint.upsert({
      ...args,
      ...select,
    })
  },
})
