import { PrismaClient } from "@prisma/client";

import { contacts } from "../seedData/contacts";

export class ContactSeeder {
  constructor(private prisma: PrismaClient) {}

  async seed() {
    await this.prisma.divisionalContact.deleteMany();
    await this.prisma.contact.deleteMany();

    const accountCount = await this.prisma.account.count();

    for (const contact of contacts) {
      const randomNumber = Math.floor(Math.random() * accountCount);

      const randomAccount = await this.prisma.account
        .findMany({
          skip: randomNumber,
          take: 1,
        })
        .then((res) => res[0]);

      console.log(`Creating contact ${contact.primaryBusinessEmail}`);

      await this.prisma.contact.create({
        data: {
          ...contact,
          divisionalContact: {
            create: {
              ...contact.divisionalContact,
            },
          },
          accounts: {
            create: {
              accountId: randomAccount.id,
            },
          },
        },
      });
    }
  }
}
