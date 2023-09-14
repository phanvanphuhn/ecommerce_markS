import { PrismaClient, Profile, Role } from "@prisma/client";
import { hash } from "bcrypt";

import { doctorUsers, normalUsers } from "./seedData/users";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.address.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.hospital.deleteMany();
  await prisma.doctor.deleteMany();

  const address = await prisma.address.create({
    data: {
      city: "Bangalore",
      country: "United States",
      street: "MG Road",
      state: "Karnataka",
      zip: "560001",
    },
  });

  const hospital = await prisma.hospital.create({
    data: {
      address: "Somewhere",
      name: "Changi General Hospital",
    },
  });

  const defaultProfile: Omit<Profile, "id" | "userId"> = {
    mobile: "1234567890",
    preferredLanguage: "English",
    addressId: address.id,
  };

  for (const user of normalUsers) {
    await prisma.user.create({
      data: {
        email: user.email,
        password: await hash(user.password, 10),
        role: Role.USER,
        firstName: user.firstName,
        lastName: user.lastName,
        profile: {
          create: {
            ...defaultProfile,
          },
        },
      },
    });
  }

  for (const doctor of doctorUsers) {
    await prisma.user.create({
      data: {
        email: doctor.email,
        password: await hash(doctor.password, 10),
        role: Role.DOCTOR,
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        profile: {
          create: {
            ...defaultProfile,
          },
        },
        Doctor: {
          create: {
            title: doctor.title,
            specialties: doctor.specialties,
            hospitals: {
              create: {
                hospital: {
                  connect: {
                    id: hospital.id,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  console.log("Seeding...");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
