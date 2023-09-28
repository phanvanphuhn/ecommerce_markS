// import { PrismaClient } from "@prisma/client";

// import { accounts } from "../seedData/old/accounts";

// export class AccountSeeder {
//   constructor(private prisma: PrismaClient) {}

//   async seed() {
//     await this.prisma.account.deleteMany();

//     const territoryCount = await this.prisma.territory.count();

//     for (const account of accounts) {
//       const randomNumber = Math.floor(Math.random() * territoryCount - 1);

//       const randomTerritory = await this.prisma.territory
//         .findMany({
//           skip: randomNumber,
//           take: 1,
//         })
//         .then((res) => res[0]);

//       console.log(`Creating account ${account.accountName}`);

//       await this.prisma.account.create({
//         data: {
//           ...account,
//           territories: {
//             connect: {
//               id: randomTerritory.id,
//             },
//           },
//         },
//       });
//     }
//   }
// }
