import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { isEmpty } from "class-validator";

import { CreateScheduleInput } from "./dto/create-schedule.input";

import { ScheduleCreateInput } from "@generated/nestgraphql/schedule/schedule-create.input";

@Injectable()
export class ScheduleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateScheduleInput) {
    const createScheduleInput: ScheduleCreateInput = {
      subject: data.subject,
      endDate: data.endDate,
      startDate: data.startDate,
      scheduleType: data.scheduleType,
      user: {
        connect: {
          id: data.userId,
        },
      },
    };

    if (!isEmpty(data.planCall)) {
      createScheduleInput.planCall = {
        create: {
          ...data.planCall,
        },
      };
    }

    if (!isEmpty(data.caseLog)) {
      createScheduleInput.caseLog = {
        create: {
          ...data.caseLog,
          productsInvoice: {},
        },
      };
    }

    return this.prismaService.schedule.create({
      data: {
        ...createScheduleInput,
      },
      select: data.select,
    });
  }

  async findAll(data: Prisma.ScheduleFindManyArgs) {
    return this.prismaService.schedule.findMany(data);
  }

  async findOne(scheduleWhereUniqueInput: Prisma.ScheduleWhereUniqueInput) {
    return this.prismaService.schedule.findUnique({
      where: scheduleWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.ScheduleWhereUniqueInput;
    data: Prisma.ScheduleUpdateInput;
  }) {
    const { where, data } = params;
    return this.prismaService.schedule.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.ScheduleWhereUniqueInput) {
    return this.prismaService.schedule.delete({
      where,
    });
  }

  async count(where: Prisma.ScheduleCountArgs) {
    return this.prismaService.schedule.count(where);
  }

  async findMany(args: Prisma.ScheduleFindManyArgs) {
    return this.prismaService.schedule.findMany(args);
  }
}
