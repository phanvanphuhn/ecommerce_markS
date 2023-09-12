import {
  Args,
  Info,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";

import { ScheduleService } from "./schedule.service";
import { Schedule } from "./models/schedule.model";
import { CreateScheduleInput } from "./dto/create-schedule.input";

import { ScheduleWhereUniqueInput } from "@generated/nestgraphql/schedule/schedule-where-unique.input";
import { FindManyScheduleArgs } from "@generated/nestgraphql/schedule/find-many-schedule.args";

@Resolver(() => Schedule)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => [Schedule], { nullable: true })
  async schedules(
    @Args() args: FindManyScheduleArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    const select = new PrismaSelect(info).value;
    return await this.scheduleService.findAll({ ...args, ...select });
  }

  @Query(() => Schedule, { nullable: true })
  async schedule(
    @Args("where") where: ScheduleWhereUniqueInput,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.scheduleService.findOne({
      where,
      ...new PrismaSelect(info).value,
    });
  }

  @Mutation(() => Schedule)
  async createSchedule(
    @Args("data") data: CreateScheduleInput,
    @Info() info: GraphQLResolveInfo
  ) {
    if (!data.planCall && !data.caseLog) {
      throw new Error("You must provide either a planCall or a caseLog");
    }

    return this.scheduleService.create({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @ResolveField("user")
  async user(@Parent() parent: Schedule) {
    return parent.user;
  }
}
