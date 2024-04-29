import { mutationField, nonNull } from 'nexus'

export const ComplaintCreateOneMutation = mutationField('createOneComplaint', {
  type: nonNull('Complaint'),
  args: {
    data: 'ComplaintCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.complaint.create({
      data,
      ...select,
    })
  },
})
