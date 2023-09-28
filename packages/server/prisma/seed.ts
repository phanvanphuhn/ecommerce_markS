import { PrismaClient } from "@prisma/client";

// import { UserSeeder } from "./seedModules/UserSeeder";
// import { AccountSeeder } from "./seedModules/AccountSeeder";
// import { TerritorySeeder } from "./seedModules/TerritorySeeder";
// import { ContactSeeder } from "./seedModules/ContactSeeder";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function main() {
  // await prisma.contact.deleteMany();
  // await prisma.profile.deleteMany();
  // // TERRITORY MUST BE CREATED FIRST
  // const territorySeeder = new TerritorySeeder(prisma);
  // await territorySeeder.seed();
  // const userSeeder = new UserSeeder(prisma);
  // await userSeeder.seed();
  // const accountSeeder = new AccountSeeder(prisma);
  // await accountSeeder.seed();
  // const contactSeeder = new ContactSeeder(prisma);
  // await contactSeeder.seed();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
