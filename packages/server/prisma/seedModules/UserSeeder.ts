import { PrismaClient, Profile } from "@prisma/client";

import { users } from "../seedData/users";

export class UserSeeder {
  constructor(private prisma: PrismaClient) {}

  async seed() {
    await this.prisma.user.deleteMany();

    const defaultProfile: Omit<
      Profile,
      "id" | "userId" | "createdAt" | "updatedAt"
    > = {
      title: "",
      mobile: "9019244",
      preferredLanguage: "en",
    };

    const territoryCount = await this.prisma.territory.count();

    for (const user of users) {
      const randomNumber = Math.floor(Math.random() * territoryCount);

      const randomTerritory = await this.prisma.territory
        .findMany({
          skip: randomNumber,
          take: 1,
        })
        .then((res) => res[0]);

      console.log(`Creating user ${user.email}`);

      await this.prisma.user.create({
        data: {
          ...user,
          profile: {
            create: {
              ...defaultProfile,
            },
          },
          territory: {
            connect: {
              id: randomTerritory.id,
            },
          },
        },
      });
    }

    const userCount = await this.prisma.user.count();
    const allCreatedUsers = await this.prisma.user.findMany();

    for (const user of allCreatedUsers) {
      const randomNumber = Math.floor(Math.random() * userCount);

      const randomUser = await this.prisma.user
        .findMany({
          skip: randomNumber,
          take: 1,
        })
        .then((res) => res[0]);

      console.log(`Connecting ${user.email} with ${randomUser.email}`);

      await this.prisma.user.update({
        where: {
          id: randomUser.id,
        },
        data: {
          reportedBy: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          reportingTo: {
            connect: {
              id: randomUser.id,
            },
          },
        },
      });
    }
  }
}
