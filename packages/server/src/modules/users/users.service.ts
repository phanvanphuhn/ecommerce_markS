import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findMany(input: Prisma.UserFindManyArgs) {
    return await this.prisma.user.findMany({
      ...input,
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where,
    });
  }

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;
    return await this.prisma.user.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.delete({
      where,
    });
  }

  async deleteMany(where: Prisma.UserWhereInput) {
    return await this.prisma.user.deleteMany({
      where,
    });
  }

  async updateMany(params: {
    where: Prisma.UserWhereInput;
    data: Prisma.UserUpdateManyMutationInput;
  }) {
    const { where, data } = params;
    return await this.prisma.user.updateMany({
      data,
      where,
    });
  }

  async count(where: Prisma.UserWhereInput) {
    return await this.prisma.user.count({
      where,
    });
  }
}
