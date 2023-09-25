import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}
  async findMany(input: Prisma.AccountFindManyArgs) {
    return await this.prisma.account.findMany({
      ...input,
    });
  }
  async findOne(where: Prisma.AccountWhereUniqueInput) {
    return await this.prisma.account.findUnique({
      where,
    });
  }
  async create(data: Prisma.AccountCreateInput) {
    return await this.prisma.account.create({
      data,
    });
  }
  async update(params: {
    where: Prisma.AccountWhereUniqueInput;
    data: Prisma.AccountUpdateInput;
  }) {
    const { where, data } = params;
    return await this.prisma.account.update({
      data,
      where,
    });
  }
  async delete(where: Prisma.AccountWhereUniqueInput) {
    return await this.prisma.account.delete({
      where,
    });
  }
  async deleteMany(where: Prisma.AccountWhereInput) {
    return await this.prisma.account.deleteMany({
      where,
    });
  }
  async updateMany(params: {
    where: Prisma.AccountWhereInput;
    data: Prisma.AccountUpdateManyMutationInput;
  }) {
    const { where, data } = params;
    return await this.prisma.account.updateMany({
      data,
      where,
    });
  }
}
