import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { ContactByTerritoryInput } from "./dto/contact-by-territory.input";

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async findMany(input: Prisma.ContactFindManyArgs) {
    return await this.prisma.contact.findMany(input);
  }

  async findManyByTerritory(input: ContactByTerritoryInput) {
    const { where: territoryId } = input;
    delete input.where.territoryId;

    const accounts = await this.prisma.account.findMany({
      where: {
        territories: {
          every: {
            territoryId: territoryId as string,
          },
        },
      },
    });

    return await this.prisma.contact.findMany({
      where: {
        account: {
          territories: {
            every: {
              territoryId: territoryId as string,
            },
          },
        },
        ...(input.where as Prisma.ContactWhereInput),
      },
      ...(input as Prisma.ContactFindManyArgs),
    });
  }

  async findOne(input: Prisma.ContactFindUniqueArgs) {
    return await this.prisma.contact.findUnique(input);
  }

  async create(input: Prisma.ContactCreateArgs) {
    return await this.prisma.contact.create(input);
  }

  async update(input: Prisma.ContactUpdateArgs) {
    return await this.prisma.contact.update(input);
  }

  async delete(input: Prisma.ContactDeleteArgs) {
    return await this.prisma.contact.delete(input);
  }

  async deleteMany(input: Prisma.ContactDeleteManyArgs) {
    return await this.prisma.contact.deleteMany(input);
  }

  async updateMany(input: Prisma.ContactUpdateManyArgs) {
    return await this.prisma.contact.updateMany(input);
  }

  async upsert(input: Prisma.ContactUpsertArgs) {
    return await this.prisma.contact.upsert(input);
  }

  async count(input: Prisma.ContactCountArgs) {
    return await this.prisma.contact.count(input);
  }
}
