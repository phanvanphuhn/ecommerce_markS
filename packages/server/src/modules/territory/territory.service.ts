import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class TerritoryService {
  constructor(private prisma: PrismaService) {}

  async findMany(input: Prisma.TerritoryFindManyArgs) {
    return await this.prisma.territory.findMany(input);
  }

  async findOne(input: Prisma.TerritoryFindUniqueArgs) {
    return await this.prisma.territory.findUnique(input);
  }

  async create(input: Prisma.TerritoryCreateArgs) {
    return await this.prisma.territory.create(input);
  }

  async update(input: Prisma.TerritoryUpdateArgs) {
    return await this.prisma.territory.update(input);
  }

  async delete(input: Prisma.TerritoryDeleteArgs) {
    return await this.prisma.territory.delete(input);
  }
}
