// import { PrismaClient } from "@prisma/client";

// import { territories } from "../seedData/territories";

// export class TerritorySeeder {
//   constructor(private prisma: PrismaClient) {}

//   async seed() {
//     await this.prisma.territory.deleteMany();

//     for (const terr of territories) {
//       console.log(`Creating territory ${terr.countryName}`);

//       await this.prisma.territory.create({
//         data: {
//           ...terr,
//         },
//       });
//     }
//   }
// }
